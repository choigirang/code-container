import React, { ComponentProps } from "react";
import { styled } from "styled-components";
import { api } from "../../util/api";
import { useDispatch } from "react-redux";
import { changeWrite } from "../../redux/actions/write";

export default function SubmitBtn(props: {
  title: string;
  stack: string;
  htmlContent: string;
}) {
  // 제출 후 글 작성 상태를 해제하기 위한 reducer
  const dispatch = useDispatch();

  // api 제출 이벤트
  const saveHandler: ComponentProps<"button">["onSubmit"] = (e) => {
    e.preventDefault();
    const { title, stack, htmlContent } = props;
    const data = { title, stack, htmlContent };
    console.log(data);

    if (!title || !stack || !htmlContent)
      return alert("내용을 모두 입력해야 합니다.");

    api
      .post("/posts", data)
      .then((res) => {
        alert("작성이 완료되었습니다.");
        dispatch(changeWrite());
      })
      .catch((err) => {
        alert("콘솔 확인");
        console.log(err);
      });
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
