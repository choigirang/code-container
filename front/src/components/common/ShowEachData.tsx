import React, { ComponentProps, useContext } from "react";
import { StackOfData } from "../../type/aboutRedux";
import { BsArrowLeftCircleFill, BsPencilFill } from "react-icons/bs";
import { styled } from "styled-components";
import ToastViewer from "../editor/ToastViewer";
import { SelectDataContext } from "../../provider/SelectDataProvider";
import { AuthContext } from "../../provider/AuthProvider";
import { ApiStackData } from "../../type/api";

/**
 * StackBox에서 클릭한 데이터가 있는지
 * 클릭한 스택에 대한 data를 context로부터 전달받아
 * @returns 상세 데이터를 포함한 페이지를 보여주는 컴포넌트
 */
export default function ShowEachData({
  data,
  setWrite,
  setEdit,
}: {
  data: StackOfData;
  setWrite: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<ApiStackData>>;
}) {
  // 뒤로가기 버튼, context data 초기화
  const { initData } = useContext(SelectDataContext);

  // 비밀번호 입력된 user인지 확인
  const { user } = useContext(AuthContext);

  // ShowDataList에서 클릭받아 전달받은 props
  const { title, stack, htmlContent, createdAt } = data;

  // 글 수정 이벤트
  const editPost = () => {
    setWrite(true);
    setEdit(data);
  };

  return (
    <Container>
      <Top>
        <IconTitle>
          <BsArrowLeftCircleFill className="icon" onClick={initData} />
          <p className="title">{title}</p>
          {user && <BsPencilFill className="icon" onClick={editPost} />}
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
  align-items: center;
  gap: 20px;

  .icon {
    width: 24px;
    height: 24px;
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
