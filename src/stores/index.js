/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
// This file to combine reducer
import { combineReducers, } from 'redux';

import searchReducer from './searchRepos/reducer';
import {
  authenticationActions,
  authenticationReducers,
  authenticationTypes,
  authenticationSelectors,
} from './authentication';

const rootReducer = combineReducers({
  authentication: authenticationReducers,
  searchReducer, // more
});

const types = {
  authentication: authenticationTypes,
};

const actions = {
  authentication: authenticationActions,
};
const selectors = {
  authentication: authenticationSelectors,
};

export { rootReducer, actions, types, selectors };
