// 스택 타입
export interface Stack {
  [key: string]: string;
}

export type StackAction = {
  payload: Stack;
};
