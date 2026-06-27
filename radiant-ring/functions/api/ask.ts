

interface Env {
  AI_API_KEY?: string;
  AI_BASE_URL?: string;
  AI_MODEL?: string;
}

type Gender = "men" | "women";

const SHAPE_IDS = [
  "oval",
  "round",
  "square",
  "rectangle",
  "heart",
  "diamond",
] as const;
type ShapeId = (typeof SHAPE_IDS)[number];

const SHAPE_LABELS: Record<ShapeId, string> = {
  oval: "Oval",
  round: "Round",
  square: "Square",
  rectangle: "Rectangle",
  heart: "Heart",
  diamond: "Diamond",
};

const MAX_BODY_BYTES = 16 * 1024;
const MAX_HISTORY = 8;
const MAX_MSG_CHARS = 1500;
const MAX_TOKENS = 2000;
const UPSTREAM_TIMEOUT_MS = 25000;

interface ChatMsg {
  role: "user" | "assistant";
  content: string;
}

interface AskBody {
  shape?: unknown;
  gender?: unknown;
  messages?: unknown;
  lang?: unknown;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function isShape(v: unknown): v is ShapeId {
  return typeof v === "string" && (SHAPE_IDS as readonly string[]).includes(v);
}

function sanitizeHistory(raw: unknown): ChatMsg[] {
  if (!Array.isArray(raw)) return [];
  const out: ChatMsg[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") continue;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const trimmed = content.trim().slice(0, MAX_MSG_CHARS);
    if (!trimmed) continue;
    out.push({ role, content: trimmed });
  }
  return out.slice(-MAX_HISTORY);
}

function buildSystemPrompt(
  shape: ShapeId,
  gender: Gender,
  lang: string,
): string {
  const facets =
    gender === "men"
      ? "glasses/eyewear, hairstyles, and beard/facial-hair styles"
      : "glasses/eyewear and hairstyles";
  const sections =
    gender === "men"
      ? "Glasses, Hairstyle, and Beard"
      : "Glasses and Hairstyle";
  const beardLine =
    gender === "men"
      ? "Always include a Beard section."
      : "Do not include a Beard section (not applicable).";
  return [
    "You are a friendly, practical personal style advisor specializing in how face shape affects looks.",
    `The user has a ${SHAPE_LABELS[shape]} face shape and identifies styling preferences as: ${gender}.`,
    `Recommend ${facets} that flatter a ${SHAPE_LABELS[shape]} face.`,
    "Format your answer in clean Markdown so it renders nicely:",
    `Open with ONE short intro sentence about the ${SHAPE_LABELS[shape]} face shape and the styling goal (no greeting like 'Hello').`,
    `Then a section for each of: ${sections}. Start each section with a Markdown heading line ('## Glasses', '## Hairstyle'${gender === "men" ? ", '## Beard'" : ""}).`,
    beardLine,
    "Under each heading, give 2-4 bullet points. Start each bullet with '- ' and lead with a bold label using '**...**' (the specific frame shape, cut, or beard style), then ': ' and a one-line reason it flatters this face shape.",
    "Use real, specific names (e.g. round frames, side-swept fringe, curtain bangs) — not vague advice. Keep each bullet to a single line.",
    "You MAY use Markdown headings ('##'), bold ('**text**'), and hyphen bullets ('- '). Do not use tables, code blocks, or images.",
    "Keep the whole reply concise and skimmable.",
    "For follow-up questions, answer directly in the same Markdown style (short intro line if helpful, then bold-labeled bullets), staying on styling for this face shape.",
    "Be encouraging and non-judgmental. These are suggestions, not rules.",
    `Respond in this language code: ${lang}.`,
  ].join(" ");
}


async function callModel(
  env: Env,
  system: string,
  history: ChatMsg[],
  signal: AbortSignal,
): Promise<string> {
  const base = (env.AI_BASE_URL || "").replace(/\/+$/, "");
  const url = `${base}/chat/completions`;

  const res = await fetch(url, {
    method: "POST",
    signal,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${env.AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.AI_MODEL,
      max_tokens: MAX_TOKENS,
      messages: [{ role: "system", content: system }, ...history],
    }),
  });

  if (!res.ok) {
    const status = res.status === 429 || res.status === 503 ? 429 : 502;
    throw new UpstreamError(status, `upstream ${res.status}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const reply = data?.choices?.[0]?.message?.content;
  if (typeof reply !== "string" || !reply.trim()) {
    throw new UpstreamError(502, "empty upstream reply");
  }
  return reply.trim();
}

class UpstreamError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.AI_API_KEY || !env.AI_BASE_URL || !env.AI_MODEL) {
    return json({ error: "Service not configured." }, 503);
  }

  const len = Number(request.headers.get("content-length") || "0");
  if (len > MAX_BODY_BYTES) {
    return json({ error: "Request too large." }, 413);
  }

  let body: AskBody;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) {
      return json({ error: "Request too large." }, 413);
    }
    body = JSON.parse(text) as AskBody;
  } catch {
    return json({ error: "Invalid JSON." }, 400);
  }

  if (!isShape(body.shape)) {
    return json({ error: "Invalid or missing face shape." }, 400);
  }
  if (body.gender !== "men" && body.gender !== "women") {
    return json({ error: "Invalid or missing gender." }, 400);
  }
  const lang =
    typeof body.lang === "string" && /^[a-z]{2}$/.test(body.lang)
      ? body.lang
      : "en";

  const history = sanitizeHistory(body.messages);
  if (history.length === 0) {
    history.push({
      role: "user",
      content: "What glasses, hairstyle, and (if applicable) beard suit me?",
    });
  }
  if (history[history.length - 1].role !== "user") {
    return json({ error: "Last message must be from the user." }, 400);
  }

  const system = buildSystemPrompt(body.shape, body.gender, lang);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    const reply = await callModel(env, system, history, controller.signal);
    return json({ reply });
  } catch (err) {
    if (err instanceof UpstreamError) {
      const msg =
        err.status === 429
          ? "The AI service is busy. Please try again shortly."
          : "The AI service is temporarily unavailable. Please try again.";
      return json({ error: msg }, err.status);
    }
    return json(
      { error: "The AI service is temporarily unavailable. Please try again." },
      502,
    );
  } finally {
    clearTimeout(timer);
  }
};
