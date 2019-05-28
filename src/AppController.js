import { Navigation } from "react-native-navigation";
import ScreenIDs from "./screens/ScreenIDs";
import { IconAssets } from "./assets";

export const startMainApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Home",
        screen: ScreenIDs.Home,
        icon: IconAssets.SearchFolder,
        selectedIcon: IconAssets.SearchFolder,
        title: "Home"
      },
      {
        label: "Profile",
        screen: ScreenIDs.Profile,
        icon: IconAssets.Profile,
        selectedIcon: IconAssets.Profile,
        title: "Profile"
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
