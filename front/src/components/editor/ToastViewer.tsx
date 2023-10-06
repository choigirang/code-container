import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import Prism from "prismjs";
import { ComponentProps, useEffect, useRef } from "react";

export default function ToastViewer({ content }: { content: string }) {
  const viewerRef = useRef<Viewer | null>(null);

  // Viewer가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    // Viewer가 렌더링될 때마다 콜백 함수 실행
    handleViewerRendered();
  }, [content]);

  // Viewer가 렌더링된 후 실행되는 콜백 함수
  const handleViewerRendered = () => {
    // Viewer 내의 모든 요소 가져오기
    const viewerContainer = viewerRef.current?.getRootElement();
    console.log(viewerContainer);

    // 대문자로 작성된 텍스트 요소에 "component" 클래스 추가
    if (viewerContainer) {
      const textElements = viewerContainer.querySelectorAll("p, pre");
      textElements.forEach((element) => {
        console.log(element);
        if (
          element.textContent &&
          element.textContent === element.textContent.toUpperCase()
        ) {
          element.classList.add("component");
          console.log(element);
        }
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
