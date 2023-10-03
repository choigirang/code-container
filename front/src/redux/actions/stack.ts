import { StackOfData } from "../../type/aboutRedux";

const SELECTED_STACK = "stack/SELECT" as const;
const SELECTED_DATA = "stack/SELECT_DATA" as const;

export function selectStack(stack: string) {
  return {
    type: SELECTED_STACK,
    payload: stack,
  };
}

export function selectData(data: StackOfData) {
  return {
    type: SELECTED_DATA,
    payload: data,
  };
}
