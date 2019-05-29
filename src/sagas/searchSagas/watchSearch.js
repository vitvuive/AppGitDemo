import { call, put, takeLatest } from "redux-saga/effects";
import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_FAILED,
  SEARCH_REQUEST_SUCCESS
} from "../../stores/searchRepos/type";
import { getReposName } from "../../services/api";
function* handleSearch(action) {
  try {
    console.log("here search");
    console.log(action.name);
    const data = yield getReposName(action.name);
    console.log(data);
    yield put({ type: SEARCH_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: SEARCH_REQUEST_FAILED, payload: error });
    console.log(error);
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, handleSearch);
}
