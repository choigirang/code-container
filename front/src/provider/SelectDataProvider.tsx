import { createContext, useState } from "react";
import { ApiStackData } from "../type/api";

type SelectDataContextDefaultValue = {
  stack: string;
  setStack: React.Dispatch<React.SetStateAction<string>>;
  data: {
    number: number;
    stack: string;
    title: string;
    htmlContent: string;
    createdAt: string;
  };
  setData: React.Dispatch<React.SetStateAction<ApiStackData>>;
};

export const SelectDataContext = createContext<SelectDataContextDefaultValue>({
  stack: "",
  setStack: () => {},
  data: {
    number: 0,
    stack: "",
    title: "",
    htmlContent: "",
    createdAt: "",
  },
  setData: () => {},
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

  return (
    <SelectDataContext.Provider value={{ stack, setStack, data, setData }}>
      {children}
    </SelectDataContext.Provider>
  );
}
