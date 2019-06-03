/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { AsyncStorage, } from 'react-native';
import { put, takeLatest, call, } from 'redux-saga/effects';

import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';

import { types, } from 'src/stores';

function* handleLogout() {
  try {
    const auth = firebaseNana.auth();
    yield call([auth, auth.signOut,]);
    // TODO: action creator
    yield put({ type: types.authentication.REQUEST_LOGOUT_SUCCESS, });

    AsyncStorage.removeItem('userData');

    AppController.startLogin();
  } catch (error) {
    // TODO: action creator
    yield put({
      type: types.authentication.REQUEST_LOGOUT_FAILED,
      payload: error,
    });
  }
}
export function* watchLogOut() {
  yield takeLatest(types.authentication.REQUEST_LOGOUT, handleLogout);
}
