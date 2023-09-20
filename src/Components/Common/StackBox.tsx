import React from "react";
import { keyframes, styled } from "styled-components";
import StackList from "./StackList";
import FolderOfStack from "./FolderOfStack";

export default function StackBox() {
  return (
    <Container>
      <StackList />
      <FolderOfStack />
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
