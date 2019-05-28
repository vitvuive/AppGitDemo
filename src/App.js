import * as AppControllder from "./AppController";
import { Navigation } from "react-native-navigation";
import ScreenIDs from "./screens/ScreenIDs";
import { IconAssets } from "./assets";
import { registerScreens } from "./screens";

registerScreens();
Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Home",
      screen: "Home",
      icon: IconAssets.SearchFolder,
      selectedIcon: IconAssets.SearchFolder,
      title: "Home"
    },
    {
      label: "Profile",
      screen: "Profile",
      icon: IconAssets.Profile,
      selectedIcon: IconAssets.Profile,
      title: "profile"
    }
  ],
  appStyle: {
    tabBarSelectedButtonColor: "#009688",
    forceTitlesDisplay: true,
    navBarTitleTextCentered: true,
    navBarBackgroundColor: "white"
  }
});
