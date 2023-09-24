import { createStore, combineReducers } from "redux";
import { stackReducer } from "../reducers/stackReducer";
import { accountReducer } from "../reducers/accountReducer";
import { writeReducer } from "../reducers/writeReducer";

const rootReducer = combineReducers({
  stack: stackReducer,
  super: accountReducer,
  write: writeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
