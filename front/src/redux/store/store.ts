import { createStore, combineReducers } from "redux";
import { stackReducer } from "../reducers/stackReducer";

const rootReducer = combineReducers({
  stack: stackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
