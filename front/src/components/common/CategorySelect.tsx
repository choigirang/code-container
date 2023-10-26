import React, { useState } from "react";
import { styled } from "styled-components";
import { backend, frontend } from "../../constant/stackList";

/**
 *
 * @param {stackList} setStack category list
 * @returns 에디터로부터 카테고리 목록을 전달받아, 데이터의 stack을 설정하는 컴포넌트
 */
export default function CategorySelect({
  setStack,
  stack,
}: {
  setStack: React.Dispatch<React.SetStateAction<string>>;
  stack: string;
}) {
  // 카테고리로 사용될 스택 목록
  const stacks = {
    ...frontend,
    ...backend,
  };

  // 카테고리 핸들러
  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStack(e.target.value);
  };

  return (
    <Select value={stack} onChange={categoryHandler}>
      <option value="">카테고리</option>
      {Object.keys(stacks).map((stack) => (
        <option key={stack} value={stacks[stack]}>
          {stacks[stack]}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  width: 200px;
  height: 50px;
  padding-left: 10px;
  background-color: #121212;
  border: solid 3px #232428;
  color: white;
  font-weight: 700;
  border-radius: 5px;

  &:focus {
    outline: solid 3px green;
    border: none;
    background-color: transparent;
  }
`;
