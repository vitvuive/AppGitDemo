/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */

import { all, } from 'redux-saga/effects';
import searchSaga from './searchSagas';
import authenSagas from './authenSagas';
export default function* rootSaga() {
  yield all([...searchSaga, ...authenSagas,]);
}
