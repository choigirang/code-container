import React, {
  ComponentProps,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { styled } from "styled-components";
import useSearchData from "../../query/useSearchData";

export default function Search({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const keywordHandler: ComponentProps<"input">["onKeyPress"] = (e) => {
    if (e.key === "Enter") {
      const inputElement = e.target as HTMLInputElement;
      setKeyword(inputElement.value);
    }
  };

  let inputValue = inputRef.current ? inputRef.current.value : "";

  const keywordClickHandler: ComponentProps<"div">["onClick"] = () => {
    setKeyword(inputValue);
  };

  const initKeyword = () => {
    setKeyword("");
    if (inputRef.current) {
      inputRef.current.value = ""; // 입력란 초기화
    }
  };

  return (
    <Container>
      <Input
        onKeyPress={keywordHandler}
        ref={inputRef}
        placeholder="검색어를 입력하세요."
      />
      <Btn onClick={keyword ? initKeyword : keywordClickHandler}>
        {keyword ? <AiOutlineClose /> : <AiOutlineSearch className="icon" />}
      </Btn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 20px 20px;
`;

// 입력칸
const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  font-size: 15px;
  color: white;
  border: solid 2px green;
  border-radius: 10px;
  padding: 0 20px;

  &::placeholder {
    color: gray;
  }
`;

// searchBtn
const Btn = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
  cursor: pointer;
  background-color: #194219;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: #368336;

    .icon {
      color: white;
    }
  }
`;
