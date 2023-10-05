import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import StackList from "./StackList";
import FolderOfStack from "./FolderOfStack";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import EachOfStack from "./EachOfStack";
import Editor from "./Editor";

export default function StackBox() {
  // 글쓰기 상태 저장
  const write = useSelector((state: RootState) => state.write.write);

  // 선택한 데이터 있을 시 포스팅 페이지 보여주기
  const selectData = useSelector((state: RootState) => state.dataOfStack);

  return (
    <Container>
      {/* 좌측 스택 리스트 */}
      <StackList />
      {/* 우측 스택에 따른 목록, 글 작성 선택 시 작성 페이지로 바뀜 */}
      {write ? (
        <Editor />
      ) : // 선택한 데이터가 있을 시 Each, 없을 시 데이터 목록
      selectData.title ? (
        <EachOfStack data={selectData} />
      ) : (
        <FolderOfStack />
      )}
    </Container>
  );
}
// border 애니메이션
const animateBorder = keyframes`
  0% {
    border-color: #00bd00;
  }
  50% {
    border-color: #216700;
  }
  100% {
    border-color: #00bd00;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80%;
  border: solid 4px #00bd00;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 3fr;
  animation: ${animateBorder} 2s linear infinite; /* border 애니메이션 적용 */
`;
