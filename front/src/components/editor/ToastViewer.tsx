import ReactDOM from "react-dom";
import React, { ComponentProps, useEffect, useRef, useState } from "react";
import { Viewer } from "@toast-ui/react-editor";

import { BsFillClipboardCheckFill } from "react-icons/bs";
import Prism from "prismjs";

import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

export default function ToastViewer({ content }: { content: string }) {
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    handleViewerRendered();
  }, [content]);

  const handleViewerRendered = () => {
    const viewerContainer = viewerRef.current?.getRootElement();

    if (viewerContainer) {
      const codeElements = viewerContainer.querySelectorAll("pre");

      // 코드 하이라이트마다 아이콘 생성 및 이벤트 연결
      codeElements.forEach((codeElement, index) => {
        const codeContainer = document.createElement("div");
        codeContainer.className = "icon-box";
        codeElement.parentNode?.insertBefore(codeContainer, codeElement);

        // 아이콘 클릭 시 하이라이트 복사 이벤트
        const clickForCopy = () => {
          const codeBlock = codeElements[index];
          const codeBlockText = codeBlock.textContent || "";
          navigator.clipboard.writeText(codeBlockText).then(() => {
            alert(`${index + 1}번째 코드가 복사되었습니다.`);
          });
        };

        codeContainer.addEventListener("mouseover", function () {
          this.style.cursor = "pointer";
        });

        ReactDOM.render(
          <BsFillClipboardCheckFill onClick={clickForCopy} />,
          codeContainer
        );
      });
    }
  };

  return (
    <Viewer
      initialValue={content || ""}
      theme="dark"
      ref={viewerRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

// 해결해야 할 타입 에러
// const copyIcon = (
//   <div className="copy-icon">
//     <BsFillClipboardCheckFill />
//   </div>
// );

// ReactDOM.render(copyIcon, codeElement.previousSibling);

// 대문자로 작성된 코드 색상 추가를 위한 => 수정 필요
// textElements.forEach((element) => {
//   if (
//     element.textContent &&
//     element.textContent === element.textContent.toUpperCase()
//   ) {
//     element.classList.add("component");
//   }
// });
