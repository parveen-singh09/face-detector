/**
 * rateLimit.ts — client-side soft throttle on analyses.
 *
 * Fits the all-client-side privacy model: no backend, no data leaves the device.
 * A rolling-window counter in localStorage caps analyses per hour to deter
 * casual misuse (e.g. someone scripting the page in a loop).
 *
 * NOTE: this is intentionally a SOFT deterrent. It lives in the browser and is
 * trivially bypassable (clear storage / incognito). For hard abuse protection
 * you'd add a server-side limit on an API route — explicitly deferred for the
 * MVP since detection is 100% local.
 */

const STORAGE_KEY = "afsa:analyses";
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
export const MAX_PER_WINDOW = 20;

interface State {
  /** Epoch-ms timestamps of analyses within the rolling window. */
  hits: number[];
}

function read(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { hits: [] };
    const parsed = JSON.parse(raw) as State;
    return Array.isArray(parsed.hits) ? parsed : { hits: [] };
  } catch {
    // Private mode / disabled storage → treat as no history (fail open).
    return { hits: [] };
  }
}

function write(state: State): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — ignore, limit just won't persist */
  }
}

/** Drop timestamps older than the window. */
function prune(hits: number[], now: number): number[] {
  return hits.filter((t) => now > 0 && t > now - WINDOW_MS);
}

export interface RateStatus {
  allowed: boolean;
  remaining: number;
  /** Ms until the next slot frees up (0 when allowed). */
  retryAfterMs: number;
}

/** Check the current status WITHOUT consuming a slot. */
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

/**
 * Record one analysis and return the resulting status. Call this right before
 * running an analysis; if `allowed` is false, don't run it.
 */
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

/** Human-friendly "try again in ~X minutes" string. */
export function formatRetryAfter(ms: number): string {
  const minutes = Math.ceil(ms / 60000);
  if (minutes <= 1) return "in about a minute";
  return `in about ${minutes} minutes`;
}
