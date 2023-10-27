import React, { useContext } from "react";
import { api } from "../util/api";
import { WriteContext } from "../provider/WriteProvider";
import { useMutation } from "react-query";
import { queryClient } from "..";

/**
 * 데이터를 받아서 post 를 하는 useMuxtation custom hooks
 * @param data 작성된 데이터 (title, content, stack(category))
 * @returns mutate
 */
export default function useAddPost(data: {
  title: string;
  stack: string;
  htmlContent: string;
  prePost?: number;
}) {
  const { setWrite } = useContext(WriteContext);

  // StackBox에서 editPost에 저장된 기존 post의 number
  const { prePost, stack } = data;

  function addPost() {
    return api
      .post("/posts", data)
      .then((res) => {
        // prePost(게시글의 number)있을 시 게시글 수정이라는 의미
        if (prePost) {
          alert("수정이 완료되었습니다.");
          setWrite((prev) => !prev);
        } else {
          alert("작성이 완료되었습니다.");
          setWrite((prev) => !prev);
        }
      })
      .catch((err) => {
        alert("콘솔 확인");
        console.log(err);
      });
  }

  return useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries([stack !== "" && stack]);
      console.log("success", stack);
    },
  });
}
