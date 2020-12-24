import { useMongo } from "./../../helpers/useMongo";
import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../../helpers/Database";

export default async (req: NowRequest, res: NowResponse) => {
  const fetching = await fetch("http://ip-api.com/json");
  const fetchApi = await fetching.json();

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const alreadyAcessed = db.collection("visitors").find({ ip: fetchApi.query });
  const result = await useMongo(alreadyAcessed);
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
    .json({ status: "ok", data: new Date(), ip: fetchApi.query });
};
