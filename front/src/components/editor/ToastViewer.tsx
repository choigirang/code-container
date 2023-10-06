import ReactDOM from "react-dom";
import React, { ComponentProps, useEffect, useRef } from "react";
import { Viewer } from "@toast-ui/react-editor";

import { BsFillClipboardCheckFill } from "react-icons/bs";
import Prism from "prismjs";

import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { styled } from "styled-components";

export default function ToastViewer({ content }: { content: string }) {
  const viewerRef = useRef<Viewer | null>(null);

  // Viewer가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    handleViewerRendered();
  }, [content]);

  const handleViewerRendered = () => {
    // Viewer 내의 모든 요소 가져오기
    const viewerContainer = viewerRef.current?.getRootElement();

    if (viewerContainer) {
      const codeElements = viewerContainer.querySelectorAll("pre");

      // 코드로 작성된 게시글 위에 아이콘 추가
      codeElements.forEach((codeElement) => {
        // 아이콘 감쌀 부모 태그
        const codeContaienr = document.createElement("div");
        // 부모 태그 스타일 적용
        codeContaienr.className = "icon-box";
        // pre 태그 앞에 부모 태그로(아이콘) 추가
        codeElement.parentNode?.insertBefore(codeContaienr, codeElement);
        // 부모 태그에 아이콘 추가
        ReactDOM.render(<BsFillClipboardCheckFill />, codeContaienr);
      });
    }
  };

  // const copyIcon = (
  //   <div className="copy-icon">
  //     <BsFillClipboardCheckFill />
  //   </div>
  // );

  // ReactDOM.render(copyIcon, codeElement.previousSibling);

  return (
    <Viewer
      initialValue={content || ""}
      theme="dark"
      ref={viewerRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

const Com = styled.div``;

// 대문자로 작성된 코드 색상 추가를 위한 => 수정 필요
// textElements.forEach((element) => {
//   if (
//     element.textContent &&
//     element.textContent === element.textContent.toUpperCase()
//   ) {
//     element.classList.add("component");
//   }
// });
