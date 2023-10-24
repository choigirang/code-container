import React, { useContext } from "react";
import { api } from "../util/api";
import { WriteContext } from "../provider/WriteProvider";
import { useMutation } from "react-query";
import { queryClient } from "..";

export default function useAddPost(data: { [key: string]: string }) {
  const { setWrite } = useContext(WriteContext);

  function addPost() {
    return api
      .post("/posts", data)
      .then((res) => {
        alert("작성이 완료되었습니다.");
        setWrite((prev) => !prev);
      })
      .catch((err) => {
        alert("콘솔 확인");
        console.log(err);
      });
  }

  return useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries([]);
    },
  });
}
