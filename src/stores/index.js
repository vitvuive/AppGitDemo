/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { combineReducers, } from 'redux';
import { reducer as formReducer, } from 'redux-form';

//authentication
import {
  authenticationActions,
  authenticationReducers,
  authenticationTypes,
  authenticationSelectors,
} from './authentication';
//search Repos

import {
  searchReposActions,
  searchReposReducer,
  searchReposSelectors,
  searchReposTypes,
} from './searchRepos';

const rootReducer = combineReducers({
  authentication: authenticationReducers,
  searchRepos: searchReposReducer,
  form: formReducer, // more
});

const types = {
  authentication: authenticationTypes,
  searchRepos: searchReposTypes,
};

const actions = {
  authentication: authenticationActions,
  searchRepos: searchReposActions,
};
const selectors = {
  authentication: authenticationSelectors,
  searchRepos: searchReposSelectors,
};

export { rootReducer, actions, types, selectors };
