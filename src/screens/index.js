import { Navigation } from "react-native-navigation";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import ScreenIDs from "./ScreenIDs";
// const screens = {
//   [ScreenIDs.Home]: Home,
//   [ScreenIDs.Profile]: Profile,
//   [ScreenIDs.Login]: Login
// };

// const registerScreens = () => {
//   Object.keys(screens).map(screenID => {
//     Navigation.registerComponent(screenID, () => screens[screenID]);
//   });
// };
export function registerScreens() {
  Navigation.registerComponent("Home", () => Home);
  Navigation.registerComponent("Login", () => Login);
  Navigation.registerComponent("Profile", () => Profile);
}
// export { ScreenIDs, registerScreens };
