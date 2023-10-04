import React, { useEffect } from "react";
import styled from "styled-components";

/** 작성한 본문 */
export default function HtmlContainer({ data }: { data: string }) {
  // ref
  const viewContainerRef = React.useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    if (viewContainerRef.current) {
      viewContainerRef.current.innerHTML += data;
    }
  }, [data]);
  return (
    <Contents.Container>
      <Contents.ViewContainer ref={viewContainerRef} />
    </Contents.Container>
  );
}

const Contents = {
  Container: styled.div`
    width: 100%;
    margin: 0 auto;
    font-weight: 500;
    background-color: white;
    color: black;
    border-radius: 10px;

    & > div {
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      line-break: anywhere;
      line-height: 1.5;
    }
  `,

  HtmlContainer: styled.div`
    border: 2px solid orange;
  `,

  ViewContainer: styled.div`
    border-radius: 3px;
  `,
};
