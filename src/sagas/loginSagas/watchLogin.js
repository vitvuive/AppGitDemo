/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { firebaseNana } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';
import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
} from '../../stores/login/type';
function* handleLogin(action) {
  try {
    console.log('here login');
    // console.log(action.email);
    const auth = firebaseNana.auth();
    const data = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.email,
      action.password,
    );
    yield put({
      type: REQUEST_LOGIN_SUCCESS,
      payload: data,
    });
    AppController.startMainApp();
  } catch (error) {
    yield put({ type: REQUEST_LOGIN_FAILED, payload: error });
    console.log('error login');
    console.log(error);
  }
}
export function* watchLogin() {
  yield takeLatest(REQUEST_LOGIN, handleLogin);
}
