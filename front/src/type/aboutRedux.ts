import { selectStack } from "../redux/actions/stack";
import { superAccount } from "../redux/actions/superAccout";

// stack 타입
export type SelectStackAction = ReturnType<typeof selectStack>;
// super 타입
export type SuperAccountAction = ReturnType<typeof superAccount>;

// stack 타입
export type Stack = {
  [key: string]: string;
};
