import R from 'ramda';

const getNameSearch = R.pathOr('', ['searchRepos', 'name',]);
const getLoadingStatus = R.pathOr(false, ['searchRepos', 'loading',]);
const getReposData = R.pathOr([], ['searchRepos', 'data',]);

const Selectors = {
  getNameSearch,
  getLoadingStatus,
  getReposData,
};

export { Selectors };
