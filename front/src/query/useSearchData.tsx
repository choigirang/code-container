import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { ApiStackData } from "../type/api";
import { useQuery } from "react-query";
import { api } from "../util/api";

export default function useSearchData(keyword: string) {
  const search = useQuery<AxiosResponse<ApiStackData[]>>(
    ["keyword", keyword],
    () => api.get(`/search?keyword=${keyword ? keyword : "all"}`)
  );
  return { search };
}
