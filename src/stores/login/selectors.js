import R from 'ramda';

export const getLoginEmail = R.pathOr('', ['login', 'email',]);
export const getLoginPassword = R.pathOr('', ['login', 'password',]);
export const getLoginMsg = R.pathOr('', ['login', 'messenger',]);
