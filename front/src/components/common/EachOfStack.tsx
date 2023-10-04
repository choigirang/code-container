import React from "react";
import { StackOfData } from "../../type/aboutRedux";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { resetData } from "../../redux/actions/stack";
import HtmlContainer from "./HtmlContainer";

export default function EachOfStack({ data }: { data: StackOfData }) {
  const { title, stack, htmlContent, createdAt } = data;

  const dispatch = useDispatch();

  // 선택한 데이터 초기화
  const initData = () => {
    dispatch(resetData());
  };

  return (
    <Container>
      <Top>
        <IconTitle>
          <BsArrowLeftCircleFill className="icon" onClick={initData} />
          <p className="title">{title}</p>
        </IconTitle>
        <DateCategory>
          <p className="date">{createdAt.slice(0, 10)}</p>
          <p className="category">{stack}</p>
        </DateCategory>
      </Top>
      <HtmlContainer data={htmlContent} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 10px;
  gap: 20px;
`;

// space-between을 위한 Top Box
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

// icon & title
const IconTitle = styled.div`
  display: flex;
  gap: 20px;

  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .title {
    font-size: 30px;
    font-weight: 700;
  }
`;

// date & category
const DateCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
