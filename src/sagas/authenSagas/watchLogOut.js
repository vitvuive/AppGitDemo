/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { put, takeLatest, } from 'redux-saga/effects';

// import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';

import { types, actions, } from 'src/stores';

export function* watchLogOut() {
  yield takeLatest(types.authentication.LOGOUT_REQUSET, handleLogout);
}

function* handleLogout() {
  try {
    yield put(actions.authentication.setLoadingStatus(true));
    // const auth = firebaseNana.auth();
    // yield call([auth, auth.signOut,]);
    AppController.startLogin();
  } catch (error) {
    // console.log(error)
  } finally {
    yield put(actions.authentication.setEmailString(''));
    yield put(actions.authentication.setPasswordString(''));
    yield put(actions.authentication.setLoggedStatus(false));
    yield put(actions.authentication.setLoadingStatus(false));
  }
}
