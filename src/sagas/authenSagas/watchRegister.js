/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { ToastAndroid, } from 'react-native';
import { put, takeLatest, select, call, } from 'redux-saga/effects';

import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';

import { selectors, types, actions, } from 'src/stores';

export function* watchRegister() {
  yield put(actions.authentication.setLoadingStatus(false));
  yield put(actions.authentication.setEmailString(''));
  yield put(actions.authentication.setPasswordString(''));
  yield takeLatest(types.authentication.REGISTER_REQUEST, handleRegister);
}

function* handleRegister() {
  try {
    yield put(actions.authentication.setLoadingStatus(true));

    const email = yield select(selectors.authentication.getLoginEmail);
    const password = yield select(selectors.authentication.getLoginPassword);

    const auth = firebaseNana.auth();
    yield call([auth, auth.createUserWithEmailAndPassword,], email, password);
    ToastAndroid.show(`Success with email\n${email}`, ToastAndroid.CENTER);

    AppController.startLogin();
  } catch (error) {
    alert(error);
  } finally {
    yield put(actions.authentication.setLoadingStatus(false));
  }
}
