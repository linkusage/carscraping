import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const data = await kv.get("precios");
  res.status(200).json(data || { rows: [], meta: {} });
}
