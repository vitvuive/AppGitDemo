/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
// import { Types, } from './type';

const ReducerTypes = {
  SET_LOADING_STATUS: 'searchRepos.SET_LOADING_STATUS',
  SET_SEARCH_STRING: 'searchRepos.SET_SEARCH_STRING',
  SET_DATA_RESPOS: 'searchRepos.SET_DATA_RESPOS',
};

const SagaTypes = {
  FETCH_REPOS: 'searchRepos@FETCH_REPOS',
};

const Types = {
  ...ReducerTypes,
  ...SagaTypes,
};

const ReducerAction = {
  setLoadingStatus: (status: boolean = false) => ({
    type: ReducerTypes.SET_LOADING_STATUS,
    payload: status,
  }),
  setSearchString: (searchString: string = '') => ({
    type: ReducerTypes.SET_SEARCH_STRING,
    payload: searchString,
  }),
  setDataRepos: (data: Array = []) => ({
    type: ReducerTypes.SET_DATA_RESPOS,
    payload: data,
  }),
};

const SagaActions = {
  fetchRepos: () => ({
    type: SagaTypes.FETCH_REPOS,
  }),
};

const Actions = {
  ...ReducerAction,
  ...SagaActions,
};
// switch differrent
// const onSearchRequest = (name) => {
//   return {
//     type: Types.SEARCH_REQUEST,
//     name,
//   };
// };

// const nameChanged = (text) => {
//   return {
//     type: Types.NAME_CHANGED,
//     payload: text,
//   };
// };

// const Actions = {
//   onSearchRequest,
//   nameChanged,
// };

export { Actions, Types };
