/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
// This file to combine reducer
import { combineReducers, } from 'redux';

import loginReducer from './login/reducer';
import * as loginSelectors from './login/selectors';

import logOutReducer from './logOut/reducer';
import searchReducer from './searchRepos/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  searchReducer,
  logOutReducer, // more
});

const actions = {
  // TODO:
};
const types = {
  // TODO:
};
const selectors = {
  login: loginSelectors,
};

export { rootReducer, actions, types, selectors };
