import { put, takeLatest, call } from "redux-saga/effects";
import {
  REQUEST_LOGOUT,
  REQUEST_LOGOUT_FAILED,
  REQUEST_LOGOUT_SUCCESS
} from "src/stores/logOut/type";
import { firebaseNana } from "src/firebase-service/firebase";
import * as AppController from "src/AppController";
function* handleLogout() {
  try {
    const auth = firebaseNana.auth();
    yield call([auth, auth.signOut]);
    yield put({ type: REQUEST_LOGOUT_SUCCESS });
    AppController.startLogin();
  } catch (error) {
    yield put({ type: REQUEST_LOGOUT_FAILED, payload: error });
  }
}
export function* watchLogOut() {
  yield takeLatest(REQUEST_LOGOUT, handleLogout);
}
