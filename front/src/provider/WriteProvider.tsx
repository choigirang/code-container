import { createContext, useState } from "react";

type WriteContextDefaultValue = {
  write: boolean;
  setWrite: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WriteContext = createContext<WriteContextDefaultValue>({
  write: false,
  setWrite: () => {},
});

export default function WriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [write, setWrite] = useState(false);

  return (
    <WriteContext.Provider value={{ write, setWrite }}>
      {children}
    </WriteContext.Provider>
  );
}
