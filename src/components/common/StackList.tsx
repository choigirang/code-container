import React from "react";
import { styled } from "styled-components";
import { frontend } from "../../constant/stackList";
import { useDispatch, useSelector } from "react-redux";

export default function StackList() {
  const frontStack = frontend;

  const dispatch = useDispatch();

  const handleSelectStack = (stack: string) => {
    useSelector;
  };
  return (
    <Container>
      {/* 프론트엔드 아이템 */}
      <p className="title">FRONTEND</p>
      {Object.keys(frontStack).map((stack) => (
        <li key={stack} onClick={() => handleSelectStack(stack)}>
          {frontStack[stack]}
        </li>
      ))}
      {/* 백엔드 아이템 */}
      <p className="title">BACKEND</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
  color: white;
  border-right: solid 3px rgba(255, 255, 255, 0.4);
`;
