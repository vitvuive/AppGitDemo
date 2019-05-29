import * as AppControllder from "./AppController";
import { Navigation } from "react-native-navigation";
import ScreenIDs from "./screens/ScreenIDs";
import { IconAssets } from "./assets";
import { registerScreens } from "./screens";
import { startSaga, Provider, store } from "./redux-config";
// AppControllder.startLogin();
registerScreens(store, Provider);
startSaga();
export function startApp() {
  AppControllder.startLogin();
  //   AppControllder.startMainApp();

  //   Navigation.startSingleScreenApp({
  //     screen: {
  //       screen: "Login",
  //       title: "Login"
  //     }
  //   });
}
