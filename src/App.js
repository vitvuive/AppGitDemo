/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { startSaga, Provider, store, rehydrateStore, } from './redux-config';
import { registerScreens, } from './screens';
import * as AppControllder from './AppController';
import { selectors, } from './stores';
// Register as RNN required
// Note: These functions need to be run before you start the app
registerScreens(store, Provider);

async function startApp() {
  // load dada from storage
  await rehydrateStore(store);
  // Start redux saga watchers
  startSaga();
  //
  const isUser = selectors.authentication.getUserExist(store.getState());
  if (isUser) {
    AppControllder.startMainApp();
  } else {
    AppControllder.startLogin();
  }
}

export default { start: startApp, };
