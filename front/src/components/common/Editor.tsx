import { ComponentProps, useContext, useState } from "react";
import CategorySelect from "../common/CategorySelect";
import TitleInput from "../common/TitleInput";
import SubmitBtn from "./SubmitBtn";
import { styled } from "styled-components";
import ToastEditor from "../editor/ToastEditor";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { WriteContext } from "../../provider/WriteProvider";
import { ApiStackData } from "../../type/api";

/**
 * toast ui를 이용한 에디터
 * @returns 타이틀, 카테고리, 본문 설정과 데이터 전송을 위한 Submit버튼
 */
export default function Editor({
  edit,
  setEdit,
  data,
}: {
  edit?: ApiStackData;
  setEdit: React.Dispatch<React.SetStateAction<ApiStackData>>;
  data?: ApiStackData;
}) {
  const { write, setWrite } = useContext(WriteContext);
  // 타이틀
  const [title, setTitle] = useState<string>(edit ? edit.title : "");
  // 카테고리
  const [stack, setStack] = useState<string>(edit ? edit.stack : "");
  // 작성한 본문
  const [htmlContent, setHtmlContent] = useState<string>(
    edit ? edit.htmlContent : ""
  );

  const initAll = () => {
    setWrite(!write);
    setEdit({
      number: 0,
      stack: "",
      title: "",
      htmlContent: "",
      createdAt: "",
    });
  };

  return (
    <Container>
      <TitleCategoryBox>
        <Left>
          {/* 뒤로가기 */}
          <BsArrowLeftCircleFill className="icon" onClick={initAll} />
          {/* 타이틀 입력 */}
          <TitleInput setTitle={setTitle} title={title} />
        </Left>
        {/* 카테고리 선택 */}
        <CategorySelect setStack={setStack} stack={stack} />
      </TitleCategoryBox>
      {/* 본문 에디터 */}
      <ToastEditor setHtmlContent={setHtmlContent} htmlContent={htmlContent} />
      {/* 전송하기 */}
      <SubmitBtn
        title={title}
        stack={stack}
        htmlContent={htmlContent}
        number={data?.number}
        setEdit={setEdit}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// 타이틀과 카테고리 선택 div
const TitleCategoryBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 좌측 묶음
const Left = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  .icon {
    color: white;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
