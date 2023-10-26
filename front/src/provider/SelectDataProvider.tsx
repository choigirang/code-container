import { createContext, useState } from "react";
import { ApiStackData } from "../type/api";
import { SelectDataContextDefaultValue } from "../type/provider";

export const SelectDataContext = createContext<SelectDataContextDefaultValue>({
  stack: "",
  setStack: () => {},
  initStack: () => {},
  data: {
    number: 0,
    stack: "",
    title: "",
    htmlContent: "",
    createdAt: "",
  },
  setData: () => {},
  initData: () => {},
});

export default function SelectDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stack, setStack] = useState("");

  const [data, setData] = useState({
    number: 0,
    stack: "",
    title: "",
    htmlContent: "",
    createdAt: "",
  });

  // 초기화 함수 정의
  const initStack = () => {
    setStack("");
  };

  const initData = () => {
    setData({
      number: 0,
      stack: "",
      title: "",
      htmlContent: "",
      createdAt: "",
    });
  };

  return (
    <SelectDataContext.Provider
      value={{ stack, setStack, initStack, data, setData, initData }}
    >
      {children}
    </SelectDataContext.Provider>
  );
}
