import { NowRequest, NowResponse } from "@vercel/node";

export default async function (req: NowRequest, res: NowResponse) {
  const fetching = await fetch("http://ip-api.com/json");
  const fetchApi = await fetching.json();
  return res.status(200).json({ data: fetchApi });
}
