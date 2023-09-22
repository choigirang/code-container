import React from "react";
import { styled } from "styled-components";
import { frontend, backend } from "../../constant/stackList";
import { useDispatch } from "react-redux";
import { selectStack } from "../../redux/actions/stack";

export default function StackList() {
  const frontStack = frontend;
  const backStack = backend;
  const dispatch = useDispatch();

  // redux 선택한 stack 저장하기
  const handleSelectStack = (stack: string) => {
    dispatch(selectStack(stack));
  };
  return (
    <Container>
      {/* 프론트엔드 목록 */}
      <Title>FRONTEND</Title>
      <DividStack>
        {Object.keys(frontStack).map((stack) => (
          <StackItem key={stack} onClick={() => handleSelectStack(stack)}>
            {frontStack[stack]}
          </StackItem>
        ))}
      </DividStack>
      {/* 백엔드 목록 */}
      <Title>BACKEND</Title>
      <DividStack>
        {Object.keys(backStack).map((stack) => (
          <StackItem key={stack} onClick={() => handleSelectStack(stack)}>
            {backStack[stack]}
          </StackItem>
        ))}
      </DividStack>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  color: white;
  border-right: solid 3px rgba(255, 255, 255, 0.4);
`;

const DividStack = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 18px;
  font-family: 500;
  letter-spacing: 1.5;
`;

const StackItem = styled.li``;
