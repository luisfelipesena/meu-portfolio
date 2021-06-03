import { useFetch } from "@helpers/Fetch";
import { useState } from "react";

interface IResponse {
  data: any;
  status: "ok" | "error";
}

export const useUsers = () => {
  const [userAcesses, setUserAcesses] = useState<number | null>(null);

  const getVisitors = async () => {
    const fetchGetVisitors: IResponse = await useFetch(
      "/api/getVisitors",
      "GET",
      undefined
    );
    setUserAcesses(
      fetchGetVisitors.data ? Number(fetchGetVisitors.data) : null
    );
    return {
      data: fetchGetVisitors.data,
      error: fetchGetVisitors.status === "error",
    };
  };

  const insertVisitor = async () => {
    const fetchInsertVisitors: IResponse = await useFetch(
      "/api/insertVisitor",
      "POST",
      undefined
    );

    return {
      data: fetchInsertVisitors.data,
      error: fetchInsertVisitors.status === "error",
    };
  };

  return { getVisitors, userAcesses, insertVisitor };
};
