// AppProvider.tsx
import React from "react";

type ContextProviderProps<T> = {
  contexts: React.FC<T>[];
  children: React.ReactNode;
};

/**
 * 여러 개의 context를 전달받는 함수
 * @param {React.Fc} contexts 컨텍스트 컴포넌트
 * @param {ReactNode} children 하위 컴포넌트
 */
export const AppProvider: React.FC<ContextProviderProps<any>> = ({
  contexts,
  children,
}) => {
  return (
    <>
      {contexts.reduce((prev, context) => {
        return React.createElement(context, { children: prev });
      }, children)}
    </>
  );
};
