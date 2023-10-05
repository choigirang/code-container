import React, { useState } from "react";
import { styled } from "styled-components";
import { backend, frontend } from "../../constant/stackList";

export default function CategorySelect({
  setStack,
}: {
  setStack: React.Dispatch<React.SetStateAction<string>>;
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
    <Select onChange={categoryHandler}>
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