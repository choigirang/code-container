import { useContext, useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { ApiStackData } from "../../type/api";
import { AiFillFileText } from "react-icons/ai";
import { StackOfData } from "../../type/aboutRedux";
import useFetchData from "../../query/useFetchData";
import { SelectDataContext } from "../../provider/SelectDataProvider";
import { ContainerProps, DataBoxProps } from "../../type/props";
import useSearchData from "../../query/useSearchData";

/**
 *
 * @param stack useFetchData로부터 stack 받음 :stirng
 * @returns styled에 들어갈 stack에 따른 bg
 */
const getColorForStack = (stack: string) => {
  switch (stack) {
    case "React":
      return "#61DBFB";
    case "Next":
      return "gray";
    case "Styled-Components":
      return "linear-gradient(41deg, rgba(252,129,136,1) 0%, rgba(255,182,93,1) 100%)";
    case "Css":
      return "#2D53E5";
    case "Mongo":
      return "#4B9E4B";
    case "Node":
      return "rgb(142,198,24)";
    // 기본값
    default:
      return "black";
  }
};

/**
 * StackBox에서 클릭한 데이터가 있는지
 * 전체 또는 선택한 스택에 맞는 데이터 불러오는 컴포넌트
 * @returns Context의 data 유무에 따른 데이터 목록을 반환하는 컴포넌트
 */
export default function ShowDataList({ keyword }: { keyword: string }) {
  // 저장된 context data
  const { stack: selectedStack, setData } = useContext(SelectDataContext);

  // 스택에 따른 데이터 api
  const { data: posts, isLoading } = useFetchData(selectedStack);
  const { data: search } = useSearchData(keyword);

  let data = posts && posts.data;

  // Search 컴포넌트에서 입력된 keyword를 전달받아
  // 전달받은 keyword가 있을 시 검색한 데이터로 (useSearchData)
  if (keyword) data = search?.data;

  // 클릭한 데이터로 context 데이터 저장
  const saveDataOfStack = (data: StackOfData) => {
    setData(data);
  };

  if (isLoading) return <div>isLoadding</div>;

  return (
    <Container $displayOpt={Array.isArray(data)}>
      {/* data 있을 시 DataBox, 없을 시 NoneData*/}
      {Array.isArray(data) ? (
        data.map((eachData) => (
          <DataBox
            key={eachData.number}
            className="data-item"
            onClick={() => saveDataOfStack(eachData)}
            $stackColor={eachData.stack}
          >
            <p className="stack">{eachData.stack}</p>
            <AiFillFileText className="icon" />
            <p className="date">{eachData.createdAt.slice(0, 10)}</p>
            <p className="title">{eachData.title}</p>
          </DataBox>
        ))
      ) : (
        <NoneData>데이터가 없습니다.</NoneData>
      )}
    </Container>
  );
}

const animateWave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px); /* 파동의 높이 조절 */
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.$displayOpt ? "grid" : "flex")};
  align-items: start;
  align-self: start;
  ${(props) =>
    props.$displayOpt
      ? "grid-template-columns: repeat(6, 1fr);" // 그리드 아이템 너비 설정
      : "align-items: center;"}
  color: white;

  .data-item {
    aspect-ratio: 1; // 너비와 높이의 비율을 1:1로 설정
  }
`;

// 데이터 없을 시
const NoneData = styled.div`
  width: 100%;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 데이터 있을 시
const DataBox = styled.div<DataBoxProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  padding-top: 10px;
  cursor: pointer;
  position: relative;

  // 아이콘
  .icon {
    width: 75px;
    height: 75px;
    color: white;
    position: relative;
  }

  &:hover {
    .icon {
      animation: ${animateWave} 1s infinite;
    }
  }

  // 타이틀
  .title {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    word-break: break-all;
    word-wrap: break-word;
  }

  // 날짜
  .date {
    font-size: 14px;
  }

  // 스택 카테고리
  .stack {
    z-index: 1;
    padding: 5px 10px;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    font-weight: 700;
    text-shadow: #2a3d4e 1px 1px, #2a3d4e -0px 0px, #2a3d4e -1px 1px,
      #2a3d4e -2px 2px, #2a3d4e -3px 3px, #2a3d4e -4px 4px, #2a3d4e -5px 5px;
    background: ${(props) => getColorForStack(props.$stackColor)};
  }
`;
