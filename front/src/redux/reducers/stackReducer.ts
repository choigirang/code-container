import { SelectStackAction, StackOfData } from "../../type/aboutRedux";

type initStackType = {
  stack: string;
};

// 선택 데이터 타입 초기값
const initStackOfDataType = {
  title: "",
  number: 0,
  date: "",
  body: "",
  category: "",
}

const initialStack = {
  stack: "",
};

export const stackReducer = (
  state: initStackType = initialStack,
  action: SelectStackAction
) => {
  switch (action.type) {
    case "stack/SELECT":
      return { stack: action.payload };
    default:
      return state;
  }
};

export const stackDataReducer = {
  state: StackOfData =
}