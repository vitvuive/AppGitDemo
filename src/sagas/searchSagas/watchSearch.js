/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { put, takeLatest, select, } from 'redux-saga/effects';
import { getReposName, } from 'src/services/api';

import { types, selectors, } from 'src/stores';
function* handleSearch() {
  try {
    console.log('here search');
    const name = yield select(selectors.searchRepos.getNameSearch);
    const data = yield getReposName(name);
    console.log(data);
    yield put({
      type: types.searchRepos.SEARCH_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: types.searchRepos.SEARCH_REQUEST_FAILED,
      payload: error,
    });
    console.log(error);
  }
}

export function* watchSearch() {
  yield takeLatest(types.searchRepos.SEARCH_REQUEST, handleSearch);
}
