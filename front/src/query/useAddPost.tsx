import React, { useContext } from "react";
import { api } from "../util/api";
import { WriteContext } from "../provider/WriteProvider";
import { useMutation } from "react-query";
import { queryClient } from "..";
import { SelectDataContext } from "../provider/SelectDataProvider";

/**
 * 데이터를 받아서 post 를 하는 useMuxtation custom hooks
 * @param data 작성된 데이터 (title, content, stack(category))
 * @returns mutate
 */
export default function useAddPost(data: {
  title: string;
  stack: string;
  htmlContent: string;
  number?: number;
}) {
  const { setWrite } = useContext(WriteContext);
  const { initData } = useContext(SelectDataContext);

  // StackBox에서 editPost에 저장된 기존 post의 number
  const { number, stack } = data;

  function addPost() {
    return api
      .post("/posts", data)
      .then((res) => {
        // 게시글의 number 있을 시 게시글 수정이라는 의미
        if (number !== 0) {
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
      // 쿼리 키를 찾아서 초기화해주기
      queryClient.invalidateQueries([stack]);

      // ShowEachData 컴포넌트를 초기화 시키기위한
      initData();
    },
  });
}
