import {
  ResetDataAction,
  SelectDataAction,
  SelectStackAction,
  StackOfData,
  initStackType,
} from "../../type/aboutRedux";

// 선택 데이터 타입 초기값
const initStackOfData = {
  number: 0,
  stack: "",
  title: "",
  htmlContent: "",
  createdAt: "",
};

// 선택된 스택 초깃값
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

export const stackDataReducer = (
  state: StackOfData = initStackOfData,
  action: SelectDataAction | ResetDataAction
) => {
  switch (action.type) {
    case "stack/SELECT_DATA":
      return {
        ...state,
        title: action.payload.title,
        number: action.payload.number,
        htmlContent: action.payload.htmlContent,
        stack: action.payload.stack,
        createdAt: action.payload.createdAt,
      };
    case "stack/RETURN_DATA":
      return initStackOfData;
    default:
      return state;
  }
};
