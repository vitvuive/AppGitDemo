import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import searchReducer from "./searchRepos/reducer";
import logOutReducer from "./logOut/reducer";

const rootReducer = combineReducers({
  loginReducer,
  searchReducer,
  logOutReducer
});
export { rootReducer };
