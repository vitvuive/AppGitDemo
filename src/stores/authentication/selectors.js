import R from 'ramda';

const getLoginEmail = R.pathOr('', ['authentication', 'email',]);
const getLoginPassword = R.pathOr('', ['authentication', 'password',]);
const getLoading = R.pathOr(false, ['authentication', 'loading',]);
const getUserExits = R.pathOr(Boolean, ['authentication', 'isLogged',]);
const getUserData = R.pathOr(undefined, ['authentication', 'user',]);

const Selectors = {
  getLoginEmail,
  getLoginPassword,
  getLoading,
  getUserData,
  getUserExits,
};

export { Selectors };
