import { NowRequest, NowResponse } from "@vercel/node";

import { connectToDatabase } from "@helpers/Database";
import { useMongo } from "@helpers/Mongo";

export default async (_req: NowRequest, res: NowResponse) => {
  try {
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection("visitors").find({});
    let visitors = 0;
    const result = await useMongo(collection);

    result.forEach(() => visitors++);
    return res.status(201).json({ status: "ok", data: visitors });
  } catch (error) {
    return res.status(200).json({
      status: "error",
      message: "Ocorreu um erro na requisição `getUsers`",
    });
  }
};
