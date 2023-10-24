import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/queryKey";
import { api } from "../util/api";
import { AxiosResponse } from "axios";
import { ApiStackData } from "../type/api";

/**
 * @param stack 선택한 스택
 * @returns 스택에 따른 데이터 반환 query hooks
 */
export default function useFetchData(stack: string) {
  // const search = useQuery<AxiosResponse<ApiStackData[]>>(["keyword", stack], () =>
  //   api.get(`/search?keyword=${stack}`)
  // );

  const posts = useQuery<AxiosResponse<ApiStackData[]>>(
    [stack !== "" ? stack : "all"],
    () => api.get(`/posts/${stack !== "" ? stack : "all"}`)
  );

  return { posts };
}
