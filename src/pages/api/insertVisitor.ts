import { UseMongo } from "../../helpers/useMongo";
import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../../helpers/database";

export default async (req: NowRequest, res: NowResponse) => {
  const fetchApi = await (await fetch("http://ip-api.com/json")).json();
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const alreadyAcessed = db.collection("visitors").find({ ip: fetchApi.query });
  const result = await UseMongo(alreadyAcessed);
  if (result.length !== 0) {
    return res.status(400).json({
      status: "error",
      message: "User already visited this webpage",
    });
  }

  const collection = db.collection("visitors");
  await collection.insertOne({
    enteredAt: new Date(),
    ip: fetchApi.query,
  });

  return res
    .status(201)
    .json({ status: "ok", enteredAt: new Date(), ip: fetchApi.query });
};
