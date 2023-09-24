import { SuperAccountAction } from "../../type/aboutRedux";

type initAuthorityType = {
  authority: boolean;
};

const initialAuthority = {
  authority: false,
};

export const accountReducer = (
  state: initAuthorityType = initialAuthority,
  action: SuperAccountAction
) => {
  switch (action.type) {
    case "superAccount/SUPER":
      return { authority: action.payload };
    default:
      return state;
  }
};
