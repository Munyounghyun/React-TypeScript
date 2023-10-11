import { combineReducers } from "redux";
import * as L from "./loading";
import * as E from "./errorMessage";
import * as F from "./fetchUser";

//상태이름 : 해당 Reducer
export const rootReducer = combineReducers({
  loading: L.reducer,
  errorMessage: E.reducer,
  fetchUser: F.reducer,
});
