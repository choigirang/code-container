import { Editor } from "@toast-ui/react-editor";
import { ComponentProps, useRef } from "react";

import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import { styled } from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "prismjs/themes/prism.css";
// ignore 때문에 여기서 적용한 highlight가 적용되지 않을텐데 어떻게 사용해야할까
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

export default function ToastEditor({
  setHtmlContent,
  htmlContent,
}: {
  setHtmlContent: React.Dispatch<React.SetStateAction<string>>;
  htmlContent?: string;
}) {
  const editorRef = useRef<Editor>(null);

  // 작성된 내용 본문 저장
  const htmlContentHandler = () => {
    let markDownContent = editorRef.current?.getInstance().getMarkdown() || "";
    setHtmlContent(markDownContent);
  };

  return (
    <Editor
      // top10% , submitBtn height 제외
      height="calc(90% - 60px)"
      ref={editorRef}
      initialEditType="markdown"
      useCommandShortcut={true}
      theme="dark"
      previewStyle="tab"
      language="ko-KR"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      onChange={htmlContentHandler}
      initialValue={htmlContent}
    />
  );
}
