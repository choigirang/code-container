import React, { ChangeEvent, FormEvent, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { backend, frontend } from "../../constant/stackList";
import { api } from "../../util/api";

export const EditorForm = () => {
  // 타이틀
  const [title, setTitle] = useState<string>("");
  // 카테고리 선택
  const [stack, setStack] = useState<string>("");
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState(""); // 추가: HTML 내용을 저장할 상태

  // 카테고리 데이터
  const stacks = {
    ...frontend,
    ...backend,
  };

  // 타이틀 변경
  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 카테고리 변경
  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStack(e.target.value);
    console.log(e.target.value);
  };

  // 에디터의 내용이 변경될 때마다 호출되는 함수
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    // 에디터 내용을 HTML 문자열로 변환하여 상태에 저장
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlContent(content);
  };

  const postData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !stack || !htmlContent) return alert("다시");
    const data = { title, stack, htmlContent };
    api
      .post("/posts", data)
      .then((res) => alert("완료"))
      .catch((err) => console.log(err));
  };

  return (
    <MyBlock onSubmit={postData}>
      {/* 타이틀 & 카테고리 */}
      <TitleWithCategoryBox>
        {/* 타이틀 */}
        <TitleInput onChange={titleHandler} placeholder="제목을 입력하세요." />
        {/* 카테고리 */}
        <SelectBox onChange={categoryHandler}>
          {Object.keys(stacks).map((stack) => (
            <option key={stack}>{stacks[stack]}</option>
          ))}
        </SelectBox>
      </TitleWithCategoryBox>
      {/* 에디터 */}
      <Editor
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: "ko",
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
      {/* 제출 버튼 */}
      <SubmitBtn>전송</SubmitBtn>
    </MyBlock>
  );
};

const MyBlock = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #f1f1f1;
  overflow: scroll;
  position: relative;

  .wrapper-class {
    width: 100%;
    height: 80%;
    margin: 0 auto;
  }
  .editor {
    overflow-y: scroll;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 5px !important;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2f3542;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
    }
  }
`;

// 타이틀과 카테고리
const TitleWithCategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 타이틀 입력
const TitleInput = styled.input`
  max-width: 500px;
  width: 50%;
  height: 50px;
  padding-left: 10px;
  background-color: transparent;
  border: solid 1px white;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
  }

  &:focus {
    outline: solid 3px green;
    border: none;
  }
`;

// 카테고리 선택
const SelectBox = styled.select`
  width: 150px;
  padding-left: 10px;
  background-color: transparent;
  color: white;
  font-weight: 700;
  border-radius: 5px;

  &:focus {
    outline: solid 3px green;
    border: none;
  }
`;

// 전송 버튼
const SubmitBtn = styled.button`
  width: 70px;
  height: 35px;
  background-color: white;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 5px;
`;
