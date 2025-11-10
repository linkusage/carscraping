import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method NotAllowed" });
  }

  const body = req.body;

  // Save JSON in Upstash Redis
  await redis.set("precios", body);

  res.status(200).json({ ok: true });
}
