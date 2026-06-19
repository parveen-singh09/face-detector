const STORAGE_KEY = "afsa:analyses";
const WINDOW_MS = 60 * 60 * 1000;
export const MAX_PER_WINDOW = 100;

interface State {
  hits: number[];
}

function read(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { hits: [] };
    const parsed = JSON.parse(raw) as State;
    return Array.isArray(parsed.hits) ? parsed : { hits: [] };
  } catch {
    return { hits: [] };
  }
}

function write(state: State): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
}

function prune(hits: number[], now: number): number[] {
  return hits.filter((t) => now > 0 && t > now - WINDOW_MS);
}

export interface RateStatus {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
}

export function checkRateLimit(): RateStatus {
  const now = Date.now();
  const hits = prune(read().hits, now);
  const remaining = Math.max(0, MAX_PER_WINDOW - hits.length);
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

export function recordAnalysis(): RateStatus {
  const now = Date.now();
  const hits = prune(read().hits, now);
  if (hits.length >= MAX_PER_WINDOW) {
    const oldest = Math.min(...hits);
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: Math.max(0, oldest + WINDOW_MS - now),
    };
  }
  hits.push(now);
  write({ hits });
  return {
    allowed: true,
    remaining: Math.max(0, MAX_PER_WINDOW - hits.length),
    retryAfterMs: 0,
  };
}

export function formatRetryAfter(ms: number): string {
  const minutes = Math.ceil(ms / 60000);
  if (minutes <= 1) return "in about a minute";
  return `in about ${minutes} minutes`;
}
