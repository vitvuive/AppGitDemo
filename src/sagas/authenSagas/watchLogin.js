/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { call, put, takeLatest, select, } from 'redux-saga/effects';

import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';

import { selectors, types, } from 'src/stores';

export function* watchLogin() {
  yield takeLatest(types.authentication.REQUEST_LOGIN, handleLogin);
}

function* handleLogin() {
  try {
    const email = yield select(selectors.authentication.getLoginEmail);
    const password = yield select(selectors.authentication.getLoginPassword);

    const auth = firebaseNana.auth();
    const data = yield call(
      [auth, auth.signInWithEmailAndPassword,],
      email,
      password,
    );
    yield put({
      type: types.authentication.REQUEST_LOGIN_SUCCESS,
      payload: data,
    });
    console.log('login sucess');
    AppController.startMainApp();
  } catch (error) {
    yield put({
      type: types.authentication.REQUEST_LOGIN_FAILED,
      payload: error,
    });
    console.log(error);
  }
}
