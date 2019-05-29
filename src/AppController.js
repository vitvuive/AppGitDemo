import { Navigation } from "react-native-navigation";
import ScreenIDs from "./screens/ScreenIDs";
import { IconAssets } from "./assets";

export const startMainApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Search",
        screen: ScreenIDs.Home,
        icon: IconAssets.SearchFolder,
        selectedIcon: IconAssets.SearchFolder,
        navigatorStyle: {
          navBarHidden: true,
          statusBarColor: "#009688"
        }
      },
      {
        label: "Profile",
        screen: ScreenIDs.Profile,
        icon: IconAssets.Profile,
        selectedIcon: IconAssets.Profile,
        title: "Profile",
        navBarBackgroundColor: "#009688"
      }
    ],
    appStyle: {
      tabBarSelectedButtonColor: "#009688",
      forceTitlesDisplay: true,
      navBarTitleTextCentered: true,
      navBarBackgroundColor: "white"
    }
  });
};

export const startLogin = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: ScreenIDs.Login,
      title: "Login"
    }
  });
};
