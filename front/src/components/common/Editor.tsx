import { ComponentProps, useContext, useState } from "react";
import CategorySelect from "../common/CategorySelect";
import TitleInput from "../common/TitleInput";
import SubmitBtn from "./SubmitBtn";
import { styled } from "styled-components";
import ToastEditor from "../editor/ToastEditor";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { WriteContext } from "../../provider/WriteProvider";

/**
 * toast ui를 이용한 에디터
 * @returns 타이틀, 카테고리, 본문 설정과 데이터 전송을 위한 Submit버튼
 */
export default function Editor() {
  const { setWrite } = useContext(WriteContext);
  // 타이틀
  const [title, setTitle] = useState<string>("");
  // 카테고리
  const [stack, setStack] = useState<string>("");
  // 작성한 본문
  const [htmlContent, setHtmlContent] = useState<string>("");
  // 작성된 내용을 가져오기 위한 ref

  return (
    <Container>
      <TitleCategoryBox>
        <Left>
          {/* 뒤로가기 */}
          <BsArrowLeftCircleFill
            className="icon"
            onClick={(prev) => setWrite(!prev)}
          />
          {/* 타이틀 입력 */}
          <TitleInput title={setTitle} />
        </Left>
        {/* 카테고리 선택 */}
        <CategorySelect setStack={setStack} />
      </TitleCategoryBox>
      {/* 본문 에디터 */}
      <ToastEditor setHtmlContent={setHtmlContent} />
      {/* 전송하기 */}
      <SubmitBtn title={title} stack={stack} htmlContent={htmlContent} />
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
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
