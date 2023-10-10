import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { api } from "../../util/api";
import { keyframes, styled } from "styled-components";
import { ApiStackData } from "../../type/api";
import { AiFillFileText } from "react-icons/ai";
import { StackOfData } from "../../type/aboutRedux";
import { selectData } from "../../redux/actions/stack";
import useFetchData from "../../query/useFetchData";

type ContainerProps = {
  $displayOpt: boolean;
};

export default function ShowDataList() {
  // 저장된 redux data
  const stack = useSelector((state: RootState) => state.stack.stack);

  const data: ApiStackData[] = useFetchData(stack);

  const dispatch = useDispatch();

  // 클릭한 데이터로 redux 데이터 저장
  const saveDataOfStack = (stack: StackOfData) => {
    dispatch(selectData(stack));
  };

  return (
    <Container $displayOpt={data && data.length > 0}>
      {/* data 있을 시 DataBox, 없을 시 NoneData*/}
      {data && data.length > 0 ? (
        data.map((eachData) => (
          <DataBox
            key={eachData.number}
            className="data-item"
            onClick={() => saveDataOfStack(eachData)}
          >
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
  display: ${(props) => (props.$displayOpt ? "grid" : "flex")};
  ${(props) =>
    props.$displayOpt
      ? "grid-template-columns: repeat(5, 1fr);" // 그리드 아이템 너비 설정
      : ""}
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
const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  // 아이콘
  .icon {
    width: 75px;
    height: 75px;
    color: white;
    position: relative;
    animation: ${animateWave} 1s infinite;
  }

  // 타이틀
  .title {
    height: 100%;
    font-size: 18px;
    font-weight: 700;
  }

  // 날짜
  .date {
    font-size: 14px;
  }
`;
