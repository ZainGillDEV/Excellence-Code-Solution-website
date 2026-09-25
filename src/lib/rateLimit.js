/**
 * Fixed-window, in-memory rate limiter.
 *
 * Good enough for a single Node process (a VPS, `next start`, Docker).
 * On serverless platforms each instance keeps its own counter, so for
 * production there swap the Map for Redis / Upstash — the interface stays
 * the same.
 */

const hits = new Map();

export function rateLimit(key, { limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfter: 0 };
  }

  entry.count += 1;

  if (entry.count > limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  return {
    allowed: true,
    remaining: limit - entry.count,
    retryAfter: 0,
  };
}

/** Best-effort client IP behind a proxy / CDN. */
export function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

// Keep the map from growing forever in a long-running process.
if (typeof setInterval === "function") {
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of hits) {
      if (now > entry.resetAt) hits.delete(key);
    }
  }, 60 * 1000);

  if (typeof timer.unref === "function") timer.unref();
}
