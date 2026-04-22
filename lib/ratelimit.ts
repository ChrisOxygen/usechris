import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const ipRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  analytics: true,
  prefix: "usechris:booking:ip",
});

export const emailRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "24 h"),
  analytics: true,
  prefix: "usechris:booking:email",
});
