import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../../helpers/database";
import { UseMongo } from "../../helpers/useMongo";

export default async (req: NowRequest, res: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("visitors").find({});
  let visitors = 0;
  const result = await UseMongo(collection);
  result.forEach((i) => visitors++);
  return res.status(201).json({ status: "ok", data: visitors });
};
