import { ApiStackData } from "./api";

// AppProvider
export type ContextProviderProps<T> = {
  contexts: React.FC<T>[];
  children: React.ReactNode;
};

// AuthProvider
export type AuthContextDefaultValue = {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
};

// SelectDataProvider
export type SelectDataContextDefaultValue = {
  stack: string;
  setStack: React.Dispatch<React.SetStateAction<string>>;
  initStack: () => void;
  data: {
    number: number;
    stack: string;
    title: string;
    htmlContent: string;
    createdAt: string;
  };
  setData: React.Dispatch<React.SetStateAction<ApiStackData>>;
  initData: () => void;
};

// WriteProvider
export type WriteContextDefaultValue = {
  write: boolean;
  setWrite: React.Dispatch<React.SetStateAction<boolean>>;
  openInput: boolean;
  setOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
};
