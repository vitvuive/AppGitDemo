/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { AsyncStorage, } from 'react-native';
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
    // TODO: action creator
    yield put({
      type: types.authentication.REQUEST_LOGIN_SUCCESS,
      payload: data,
    });

    AsyncStorage.setItem('userData', JSON.stringify(data));

    AppController.startMainApp();
  } catch (error) {
    // TODO: action creator
    yield put({
      type: types.authentication.REQUEST_LOGIN_FAILED,
      payload: error,
    });
  }
}
