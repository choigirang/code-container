import React, {
  ButtonHTMLAttributes,
  EventHandler,
  MouseEventHandler,
  useRef,
} from "react";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import { styled } from "styled-components";

export default function ToastEditor() {
  // 작성된 내용을 가져오기 위한 ref
  const editorRef = useRef<Editor>(null);

  // 작성된 내용 변환 함수
  const saveHadler = (e: React.MouseEvent<HTMLButtonElement>) => {
    let markDownContent = editorRef.current?.getInstance().getMarkdown() || "";
    let htmlContent = editorRef.current?.getInstance().getHTML() || "";
    console.log(markDownContent, htmlContent);
  };

  return (
    <Container>
      <Editor
        height="100%"
        ref={editorRef}
        initialEditType="markdown"
        useCommandShortcut={true}
        theme="dark"
        previewStyle="tab"
        language="ko-KR"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
      <Btn onClick={saveHadler}>저장하기</Btn>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// 제출 버튼
// toast ui 동일 스타일
const Btn = styled.button`
  position: absolute;
  bottom: 40px;
  right: 10px;
  width: 96px;
  height: 24px;
`;
