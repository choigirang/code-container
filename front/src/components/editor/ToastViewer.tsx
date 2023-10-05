import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import Prism from "prismjs";

export default function ToastViewer({ content }: { content: string }) {
  return (
    <Viewer
      initialValue={content || ""}
      theme="dark"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}
