import { selectStack } from "../redux/actions/stack";

// action 타입
export type SelectStackAction = ReturnType<typeof selectStack>;

// stack 타입
export type Stack = {
  [key: string]: string;
};
