// Best-effort, per-instance limiter. Serverless instances do not share memory, so this
// only stops bursts hitting the same warm instance. Swap for a shared store if needed.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED = 5000;

const hits = new Map<string, number[]>();

export function rateLimited(key: string, now = Date.now()): boolean {
  if (hits.size > MAX_TRACKED) {
    for (const [k, ts] of hits) if (ts.every((t) => now - t > WINDOW_MS)) hits.delete(k);
    if (hits.size > MAX_TRACKED) hits.clear();
  }
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}
