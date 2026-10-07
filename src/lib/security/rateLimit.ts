/**
 * In-memory sliding-window rate limiter for sensitive public endpoints (Case Reporting & Tracking).
 * Suitable for single-instance or edge fallback; can be upgraded to Redis in multi-instance production.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const storage = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 10 minutes to avoid memory leak
if (typeof setInterval !== "undefined") {
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of storage.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < 600000);
      if (record.timestamps.length === 0) {
        storage.delete(key);
      }
    }
  }, 600000);
  if (typeof timer.unref === "function") {
    timer.unref();
  }
}

export interface RateLimitOptions {
  limit: number; // max requests
  windowMs: number; // time window in milliseconds
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = { limit: 5, windowMs: 60000 }
): { success: boolean; remaining: number; resetMs: number } {
  const now = Date.now();
  const windowStart = now - options.windowMs;

  let record = storage.get(identifier);
  if (!record) {
    record = { timestamps: [] };
    storage.set(identifier, record);
  }

  // Filter out timestamps outside window
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= options.limit) {
    const oldest = record.timestamps[0];
    const resetMs = Math.max(0, oldest + options.windowMs - now);
    return { success: false, remaining: 0, resetMs };
  }

  record.timestamps.push(now);
  const remaining = options.limit - record.timestamps.length;
  return { success: true, remaining, resetMs: options.windowMs };
}
