/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { put, takeLatest, select, } from 'redux-saga/effects';
import { getReposName, } from 'src/services/api';

import { types, selectors, actions, } from 'src/stores';

export function* watchSearch() {
  yield takeLatest(types.searchRepos.FETCH_REPOS, handleSearch);
}

function* handleSearch() {
  try {
    yield put(actions.searchRepos.setLoadingStatus(true));

    const name = yield select(selectors.searchRepos.getNameSearch);
    const data = yield getReposName(name);

    if (!Array.isArray(data)) throw alert('Resposity dont exits, try again!');

    yield put(actions.searchRepos.setDataRepos(data));
  } catch (error) {
    // action creator
  } finally {
    yield put(actions.searchRepos.setLoadingStatus(false));
  }
}
