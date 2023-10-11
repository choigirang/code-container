import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/queryKey";
import { api } from "../util/api";

export default function useFetchData(stack: string) {
  const { data } = useQuery([stack !== "" ? stack : "all"], () =>
    api.get(`/posts/${stack !== "" ? stack : "all"}`)
  );

  return data && data.data;
}
