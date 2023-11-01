import React, { ComponentProps, useContext } from "react";
import { styled } from "styled-components";
import { queryClient } from "../..";
import { ApiStackData } from "../../type/api";
import { useMutation, UseBaseQueryResult } from "react-query";
import useAddPost from "../../query/useAddPost";

/**
 *
 * @param {stirng} title
 * @param {string} stack
 * @param {string} htmlContent
 * @param edit 수정하고자 하는 데이터가 있을 시
 * @returns Ediotr 컴포넌트로부터 데이터를 전달받아 fetch
 */
export default function SubmitBtn(props: {
  title: string;
  stack: string;
  htmlContent: string;
  number?: number;
  setEdit: React.Dispatch<React.SetStateAction<ApiStackData>>;
}) {
  const { title, stack, htmlContent, number } = props;
  const { mutate } = useAddPost({ title, stack, htmlContent, number });

  // api 제출 이벤트
  const saveHandler: ComponentProps<"button">["onSubmit"] = (e) => {
    e.preventDefault();

    if (!title || !stack || !htmlContent)
      return alert("내용을 모두 입력해야 합니다.");

    mutate();
  };

  return <Btn onClick={saveHandler}>저장하기</Btn>;
}

// 제출 버튼
// toast ui 동일 스타일
const Btn = styled.button`
  width: 96px;
  height: 40px;
  background-color: #121212;
  border: solid 3px #232428;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  color: white;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
