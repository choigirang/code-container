import { selectStack } from "../redux/actions/stack";
import { changeAuthority } from "../redux/actions/authority";
import { changeWrite } from "../redux/actions/write";

// stack 타입
export type SelectStackAction = ReturnType<typeof selectStack>;
// super 타입
export type SuperAccountAction = ReturnType<typeof changeAuthority>;
// write 타입
export type ChangeWriteAction = ReturnType<typeof changeWrite>;

// stack 타입
export type Stack = {
  [key: string]: string;
};
