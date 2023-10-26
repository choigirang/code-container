import React, { createContext, useState } from "react";
import { WriteContextDefaultValue } from "../type/provider";

export const WriteContext = createContext<WriteContextDefaultValue>({
  write: false,
  setWrite: () => {},
  openInput: false,
  setOpenInput: () => {},
});

export default function WriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [write, setWrite] = useState(false);
  const [openInput, setOpenInput] = useState(false);

  return (
    <WriteContext.Provider value={{ write, setWrite, openInput, setOpenInput }}>
      {children}
    </WriteContext.Provider>
  );
}
