/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { Navigation, } from 'react-native-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import ScreenIDs from './ScreenIDs';
import CardRepos from './HomeScreen/CardRepos';
import Starting from 'src/components/Starting';

const screens = {
  [ScreenIDs.HomeScreen]: HomeScreen,
  [ScreenIDs.ProfileScreen]: ProfileScreen,
  [ScreenIDs.LoginScreen]: LoginScreen,
  [ScreenIDs.CardRepos]: CardRepos,
  [ScreenIDs.Starting]: Starting,
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

export { ScreenIDs, registerScreens };
