import { NowRequest, NowResponse } from "@vercel/node";

import { connectToDatabase } from "@helpers/Database";
import { useMongo } from "@helpers/Mongo";

export default async (_req: NowRequest, res: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("visitors").find({});
  let visitors = 0;
  const result = await useMongo(collection);

  result.forEach(() => visitors++);
  return res.status(201).json({ status: "ok", data: visitors });
};
