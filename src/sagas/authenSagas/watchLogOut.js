/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { put, takeLatest, call, } from 'redux-saga/effects';
import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';

import { types, } from 'src/stores';

function* handleLogout() {
  try {
    const auth = firebaseNana.auth();
    yield call([auth, auth.signOut,]);
    yield put({ type: types.authentication.REQUEST_LOGOUT_SUCCESS, });
    AppController.startLogin();
  } catch (error) {
    yield put({
      type: types.authentication.REQUEST_LOGOUT_FAILED,
      payload: error,
    });
  }
}
export function* watchLogOut() {
  yield takeLatest(types.authentication.REQUEST_LOGOUT, handleLogout);
}
