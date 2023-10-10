import React from "react";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/queryKey";
import { api } from "../util/api";
import { PostDataType } from "../type/api";

export default function useFetchData(stack: string) {
  const { data } = useQuery([QUERY_KEY.stack, stack], () =>
    api.get(`/posts/${stack}`)
  );
  return data;
}
