import { Cursor } from "mongodb";

export const useMongo = async (doc: Cursor<any>) => {
  const result: any = [];
  await doc.forEach(iterateFunc);
  async function iterateFunc(doc) {
    if (doc) {
      result.push(doc);
    }
  }
  return result;
};
