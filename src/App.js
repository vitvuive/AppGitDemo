import * as AppControllder from "./AppController";
import { Navigation } from "react-native-navigation";
import ScreenIDs from "./screens/ScreenIDs";
import { IconAssets } from "./assets";
import { registerScreens } from "./screens";
import { startSaga, Provider, store } from "./redux-config";
registerScreens(store, Provider);
// AppControllder.startMainApp();
AppControllder.startLogin();
