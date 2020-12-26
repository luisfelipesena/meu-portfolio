import { Cursor } from "mongodb";

export const UseMongo = async (doc: Cursor<any>) => {
  const result: any = [];
  await doc.forEach(iterateFunc);
  async function iterateFunc(doc) {
    if (JSON.stringify(doc, null, 4)) {
      result.push(JSON.stringify(doc, null, 4));
    }
  }
  return result;
};
