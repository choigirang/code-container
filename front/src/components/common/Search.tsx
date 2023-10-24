import React, { ComponentProps, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styled } from "styled-components";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const keywordHandler: ComponentProps<"input">["onChange"] = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Container>
      <Input onChange={keywordHandler} placeholder="검색어를 입력하세요." />
      <AiOutlineSearch className="icon" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  border: solid 2px green;
  border-radius: 10px;

  .icon {
    color: #53d653;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  color: white;

  &::placeholder {
    color: gray;
  }
`;
