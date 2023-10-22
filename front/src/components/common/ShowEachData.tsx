import React, { useContext } from "react";
import { StackOfData } from "../../type/aboutRedux";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { styled } from "styled-components";
import ToastViewer from "../editor/ToastViewer";
import { SelectDataContext } from "../../provider/SelectDataProvider";

/**
 * StackBox에서 클릭한 데이터가 있는지
 * 클릭한 스택에 대한 data를 context로부터 전달받아
 * @returns 상세 데이터를 포함한 페이지를 보여주는 컴포넌트
 */
export default function ShowEachData({ data }: { data: StackOfData }) {
  const { initData } = useContext(SelectDataContext);
  const { title, stack, htmlContent, createdAt } = data;

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
      <ToastViewer content={htmlContent} />
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
