/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import * as AppControllder from './AppController';
import { Navigation } from 'react-native-navigation';
import ScreenIDs from './screens/ScreenIDs';
import { IconAssets } from './assets';
import { registerScreens } from './screens';
import { startSaga, Provider, store } from './redux-config';
// Register as RNN required
// Note: These functions need to be run before you start the app
registerScreens(store, Provider);
// Start redux saga watchers
startSaga();
export function startApp() {
  AppControllder.startLogin();
  // AppControllder.startMainApp();
}
