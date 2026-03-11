import arcjet, { tokenBucket } from "@arcjet/next";

export const interviewLimiter = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 6, // 6 tx/hour
      interval: 8400, // 1 hour
      capacity: 6,
    }),
  ],
});

export const retakeLimiter = arcjet({
    key: process.env.ARCJET_KEY!,
    characteristics: ["userId"],
    rules: [
        tokenBucket({
            mode: "LIVE",
            refillRate: 4,
            interval: 86400,
            capacity: 4,
        })
    ]
})
