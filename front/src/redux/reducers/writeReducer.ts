import { ChangeWriteAction } from "../../type/aboutRedux";

type initWriteType = {
  write: boolean;
};

const initialWrite = {
  write: false,
};

export const writeReducer = (
  state: initWriteType = initialWrite,
  action: ChangeWriteAction
) => {
  switch (action.type) {
    case "write/CHANGE":
      return {
        ...state,
        write: !state.write, // 현재 상태를 토글
      };
    default:
      return state;
  }
};
