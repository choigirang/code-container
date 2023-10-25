import React, { ComponentProps, SetStateAction, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styled } from "styled-components";
import useSearchData from "../../query/useSearchData";

export default function Search() {
  const { setKeyword } = useSearchData();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const keywordHandler: ComponentProps<"input">["onKeyPress"] = (e) => {
    if (e.key === "Enter") {
      const inputElement = e.target as HTMLInputElement;
      setKeyword(inputElement.value);
    }
  };

  const keywordClickHandler: ComponentProps<"svg">["onClick"] = () => {
    const inputValue = inputRef.current ? inputRef.current.value : "";
    setKeyword(inputValue);
  };

  return (
    <Container>
      <Input
        onKeyPress={keywordHandler}
        ref={inputRef}
        placeholder="검색어를 입력하세요."
      />
      <AiOutlineSearch onClick={keywordClickHandler} className="icon" />
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
