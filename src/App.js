/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { startSaga, Provider, store, } from './redux-config';
import { registerScreens, } from './screens';
import * as AppControllder from './AppController';

// Register as RNN required
// Note: These functions need to be run before you start the app
registerScreens(store, Provider);

export function startApp() {
  // Start redux saga watchers
  startSaga();

  // AppControllder.startLogin();
  // AppControllder.startMainApp();
  AppControllder.startLoading();
}
