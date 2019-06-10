/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { put, takeLatest, select, } from 'redux-saga/effects';

// import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';

import { selectors, types, actions, } from 'src/stores';

export function* watchLogin() {
  yield put(actions.authentication.setLoadingStatus(false));
  // yield put(actions.authentication.setEmailString(''));
  // yield put(actions.authentication.setPasswordString(''));
  yield takeLatest(types.authentication.LOGIN_REQUEST, handleLogin);
}

function* handleLogin() {
  try {
    yield put(actions.authentication.setLoadingStatus(true));

    const email = yield select(selectors.authentication.getLoginEmail);
    const password = yield select(selectors.authentication.getLoginPassword);

    // const auth = firebaseNana.auth();
    // const data = yield call(
    //   [auth, auth.signInWithEmailAndPassword,],
    //   email,
    //   password,
    // );

    if (email === 'viet@viet.com' && password === '123456') {
      yield put(actions.authentication.setLoggedStatus(true));
      AppController.startMainApp();
    } else {
      alert('Email or Password incorrect!');
    }

    // yield put(actions.authentication.setDataUser(data));
  } catch (error) {
    if (error) throw alert('Email or Password failed, try again!');
  } finally {
    yield put(actions.authentication.setLoadingStatus(false));
  }
}
