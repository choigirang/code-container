import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import StackList from "./StackList";
import FolderOfStack from "./FolderOfStack";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import PostEditor from "../etc/Editor";

export default function StackBox() {
  // 작성한 데이터 (markdown)
  const [htmlStr, setHtmlStr] = useState<string>("");

  const write = useSelector((state: RootState) => state.write.write);

  return (
    <Container>
      {/* 좌측 스택 리스트 */}
      <StackList />
      {/* 우측 스택에 따른 목록, 글 작성 선택 시 작성 페이지로 바뀜 */}
      {write ? (
        <PostEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
      ) : (
        <FolderOfStack />
      )}
    </Container>
  );
}
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
  min-height: 80%;
  border: solid 4px #00bd00;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 3fr;
  animation: ${animateBorder} 2s linear infinite; /* border 애니메이션 적용 */
`;
