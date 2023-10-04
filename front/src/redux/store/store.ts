import { createStore, combineReducers } from "redux";
import { stackReducer } from "../reducers/stackReducer";
import { accountReducer } from "../reducers/accountReducer";
import { writeReducer } from "../reducers/writeReducer";
import { stackDataReducer } from "../reducers/stackReducer";

const rootReducer = combineReducers({
  stack: stackReducer,
  dataOfStack: stackDataReducer,
  super: accountReducer,
  write: writeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
