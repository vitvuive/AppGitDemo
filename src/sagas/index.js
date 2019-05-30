/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */

import { all } from 'redux-saga/effects';
import loginSaga from './loginSagas';
import searchSaga from './searchSagas';
export default function* rootSaga() {
  yield all([...loginSaga, ...searchSaga]);
}
