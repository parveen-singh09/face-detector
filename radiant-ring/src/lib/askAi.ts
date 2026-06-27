import type { ShapeId } from "./faceShape";

export type Gender = "men" | "women";

export interface AskMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AskRequest {
  shape: ShapeId;
  gender: Gender;
  messages: AskMessage[];
  lang?: string;
}

export interface AskResult {
  reply: string;
}

export class AskError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}


const STORAGE_KEY = "afsa:ask";
const WINDOW_MS = 60 * 60 * 1000;
export const MAX_ASKS_PER_WINDOW = 30;

function readHits(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { hits?: unknown };
    return Array.isArray(parsed.hits)
      ? (parsed.hits.filter((n) => typeof n === "number") as number[])
      : [];
  } catch {
    return [];
  }
}

function writeHits(hits: number[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ hits }));
  } catch {
  }
}

function prune(hits: number[], now: number): number[] {
  return hits.filter((t) => t > now - WINDOW_MS);
}

export interface AskRateStatus {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
}

export function checkAskRateLimit(): AskRateStatus {
  const now = Date.now();
  const hits = prune(readHits(), now);
  const remaining = Math.max(0, MAX_ASKS_PER_WINDOW - hits.length);
  if (remaining > 0) {
    return { allowed: true, remaining, retryAfterMs: 0 };
  }
  const oldest = Math.min(...hits);
  return {
    allowed: false,
    remaining: 0,
    retryAfterMs: Math.max(0, oldest + WINDOW_MS - now),
  };
}

export function recordAsk(): void {
  const now = Date.now();
  const hits = prune(readHits(), now);
  hits.push(now);
  writeHits(hits);
}

export function formatRetryAfter(ms: number): string {
  const minutes = Math.ceil(ms / 60000);
  if (minutes <= 1) return "in about a minute";
  return `in about ${minutes} minutes`;
}


export async function askAi(req: AskRequest): Promise<AskResult> {
  let res: Response;
  try {
    res = await fetch("/api/ask", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req),
    });
  } catch {
    throw new AskError(
      "Couldn't reach the AI service. Check your connection and try again.",
      0,
    );
  }

  let data: { reply?: string; error?: string } = {};
  try {
    data = (await res.json()) as { reply?: string; error?: string };
  } catch {
  }

  if (!res.ok) {
    throw new AskError(
      data.error || "Something went wrong. Please try again.",
      res.status,
    );
  }
  if (typeof data.reply !== "string") {
    throw new AskError("The AI service returned an unexpected response.", 502);
  }
  return { reply: data.reply };
}
