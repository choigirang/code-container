import { StackOfData } from "../../type/aboutRedux";

const SELECTED_STACK = "stack/SELECT" as const;
const SELECTED_DATA = "stack/SELECT_DATA" as const;
const RETURN_DATA = "stack/RETURN_DATA" as const;

export function selectStack(stack: string) {
  return {
    type: SELECTED_STACK,
    payload: stack,
  };
}

// 개별 데이터 선택
export function selectData(data: StackOfData) {
  return {
    type: SELECTED_DATA,
    payload: data,
  };
}

// 선택된 데이터 초기화
export function resetData() {
  return {
    type: RETURN_DATA,
  };
}
