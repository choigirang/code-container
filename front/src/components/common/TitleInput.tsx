import React, { ComponentProps, useState } from "react";
import { styled } from "styled-components";

export default function TitleInput({
  title,
}: {
  title: React.Dispatch<React.SetStateAction<string>>;
}) {
  // 타이틀 핸들러
  const titleHandler: ComponentProps<"input">["onChange"] = (e) => {
    title(e.target.value);
  };

  return <Title onChange={titleHandler} placeholder="타이틀 입력" />;
}

// 타이틀 입력
const Title = styled.input`
  max-width: 500px;
  width: 50%;
  height: 50px;
  padding-left: 10px;
  background-color: #121212;
  border: solid 3px #232428;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 16px;
  }

  &:focus {
    outline: solid 3px green;
    border: none;
    background-color: transparent;
  }
`;
