import { NowRequest, NowResponse } from "@vercel/node";

import { useMongo } from "@helpers/Mongo";
import { connectToDatabase } from "@helpers/Database";

export default async (_req: NowRequest, res: NowResponse) => {
  try {
    const fetchApi = await (await fetch("http://ip-api.com/json")).json();
    const db = await connectToDatabase(process.env.MONGODB_URI);

    const alreadyAcessed = db
      .collection("visitors")
      .find({ ip: fetchApi.query });
    const result = await useMongo(alreadyAcessed);
    if (result.length !== 0) {
      return res.status(200).json({
        status: "error",
        message: "User already visited this webpage",
      });
    }

    const collection = db.collection("visitors");
    await collection.insertOne({
      enteredAt: new Date().toLocaleDateString(),
      ip: fetchApi.query,
      city: fetchApi.city,
      region: fetchApi.regionName,
    });

    return res.status(201).json({
      status: "ok",
      enteredAt: new Date(),
      ip: fetchApi.query,
      city: fetchApi.city,
      region: fetchApi.regionName,
    });
  } catch (error) {
    return res.status(200).json({
      status: "error",
      message: "Ocorreu um erro na requisição `insertUser`",
    });
  }
};
