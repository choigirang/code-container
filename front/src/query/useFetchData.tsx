import { useQuery } from "react-query";
import { QUERY_KEY } from "../constant/queryKey";
import { api } from "../util/api";
import { AxiosResponse } from "axios";
import { ApiStackData } from "../type/api";
import { useState } from "react";

/**
 * 상태값을 다루자.
 * 키워드 입력이 이루어지면 입력한 키워드들이 있을 경우에는 posts를 제거하고
 * search에 대한 데이터를 리턴하도록
 * @param stack 선택한 스택
 * @returns 스택에 따른 데이터 반환 query hooks
 */
export default function useFetchData(stack: string | number) {
  // data의 number를 활용하여
  // stackBox에서 ShowEachData로 Data props를 넘겨주는 방식이 아닌
  // 클릭한 데이터에 대한 요청으로 개별 데이터를 저장해서 사용하면
  // 쿼리 refetch를 해결할 수 있지 않을까

  return useQuery<AxiosResponse<ApiStackData[]>>([stack], () =>
    api.get(
      typeof stack === "string"
        ? `/posts/${stack === "" ? "all" : stack}`
        : `/post/${stack}`
    )
  );
}
