import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import searchReducer from "./searchRepos/reducer";

const rootReducer = combineReducers({
  loginReducer,
  searchReducer
});
export { rootReducer };
