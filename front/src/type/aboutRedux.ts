import { resetData, selectData, selectStack } from "../redux/actions/stack";
import { changeAuthority } from "../redux/actions/authority";
import { changeWrite } from "../redux/actions/write";

// stack 타입
export type SelectStackAction = ReturnType<typeof selectStack>;
// 선택한 stack의 data 타입
export type SelectDataAction = ReturnType<typeof selectData>;
// 선택한 stack의 data 초기화
export type ResetDataAction = ReturnType<typeof resetData>;
// super 타입
export type SuperAccountAction = ReturnType<typeof changeAuthority>;
// write 타입
export type ChangeWriteAction = ReturnType<typeof changeWrite>;

// stack 타입
export type Stack = {
  [key: string]: string;
};

// 선택한 스택 타입
export type initStackType = {
  stack: string;
};

// 전달될 데이터 타입
export type StackOfData = {
  number: number;
  stack: string;
  title: string;
  htmlContent: string;
  createdAt: string;
};
