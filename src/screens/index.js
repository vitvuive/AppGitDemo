/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { Navigation, } from 'react-native-navigation';
import Home from './Home/Home';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import ScreenIDs from './ScreenIDs';
import CardRepos from './Home/CardRepos/CardRepos';

const screens = {
  [ScreenIDs.Home]: Home,
  [ScreenIDs.Profile]: ProfileScreen,
  [ScreenIDs.LoginScreen]: LoginScreen,
  [ScreenIDs.CardRepos]: CardRepos,
};

const registerScreens = (store: Object, Provider: Object) => {
  Object.keys(screens).map((screenID) => {
    Navigation.registerComponent(
      screenID,
      () => screens[screenID],
      store,
      Provider,
    );
  });
};
// export function registerScreens() {
//   Navigation.registerComponent("Home", () => Home);
//   Navigation.registerComponent("Login", () => Login);
//   Navigation.registerComponent("Profile", () => Profile);
// }
export { ScreenIDs, registerScreens };
