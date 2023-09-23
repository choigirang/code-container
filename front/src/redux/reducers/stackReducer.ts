import { SelectStackAction } from "../../type/aboutRedux";

type initStackType = {
  stack: string;
};

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
