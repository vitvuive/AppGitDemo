import R from 'ramda';

const getNameSearch = R.pathOr('', ['searchRepos', 'name',]);
const getLoading = R.pathOr('', ['searchRepos', 'loading',]);

const Selectors = {
  getNameSearch,
  getLoading,
};

export { Selectors };
