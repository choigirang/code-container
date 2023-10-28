import React, { useContext, useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import StackList from "./StackList";
import ShowDataList from "./ShowDataList";
import ShowEachData from "./ShowEachData";
import Editor from "./Editor";
import { WriteContext } from "../../provider/WriteProvider";
import { SelectDataContext } from "../../provider/SelectDataProvider";
import Search from "./Search";
import { ApiStackData } from "../../type/api";

/**
 * 우측 데이터를 보여주는 박스 컴포넌트
 * @returns context에 따라 에디터, 개별 데이터, 전체 데이터 페이지로 변경되는 컴포넌트
 */
export default function StackBox() {
  // 검색어 저장
  const [keyword, setKeyword] = useState("");

  // 데이터 수정
  const [edit, setEdit] = useState<ApiStackData>({
    number: 0,
    stack: "",
    title: "",
    htmlContent: "",
    createdAt: "",
  });

  // 글쓰기 상태 저장
  const { write, setWrite } = useContext(WriteContext);

  // 클릭한 스택 및 데이터
  const { data: selectData } = useContext(SelectDataContext);

  useEffect(() => {
    console.log("render stackbox");
  }, []);

  return (
    <Container>
      {/* 좌측 스택 리스트 */}
      <StackList />
      {/* 우측 스택에 따른 목록, 글 작성 선택 시 작성 페이지로 바뀜 */}
      <OverFlowStyle>
        <Search keyword={keyword} setKeyword={setKeyword} />
        {write ? (
          <Editor edit={edit} setEdit={setEdit} />
        ) : // 선택한 데이터가 있을 시 Each, 없을 시 데이터 목록
        selectData.title ? (
          <ShowEachData setWrite={setWrite} setEdit={setEdit} />
        ) : (
          <ShowDataList keyword={keyword} />
        )}
      </OverFlowStyle>
    </Container>
  );
}
// border 애니메이션
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
  height: 80%;
  border: solid 4px #00bd00;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 3fr;
  animation: ${animateBorder} 2s linear infinite; /* border 애니메이션 적용 */
`;

// 우측 박스만 overflow
const OverFlowStyle = styled.div`
  overflow: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
