import { call, put, takeLatest } from "redux-saga/effects";
import { firebaseNana } from "../../firebase-service/firebase";
import * as AppController from "../../AppController";
import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED
} from "../../stores/login/type";
function* handleLogin() {
  try {
    const auth = firebaseNana.auth();
    const data = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.email,
      action.password
    );
    yield put({ type: REQUEST_LOGIN_SUCCESS, payload: data });
    AppController.startMainApp();
  } catch (error) {
    yield put({ type: REQUEST_LOGIN_FAILED, payload: error });
  }
}
export function* watchLogin() {
  yield takeLatest(REQUEST_LOGIN, handleLogin);
}
