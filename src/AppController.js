/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { Navigation, } from 'react-native-navigation';

import ScreenIDs from './screens/ScreenIDs';
import { IconAssets, } from './assets';

export const startMainApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Search',
        screen: ScreenIDs.Home,
        icon: IconAssets.SearchFolder,
        selectedIcon: IconAssets.SearchFolder,
        navigatorStyle: {
          navBarHidden: true,
          statusBarColor: '#009688',
        },
      },
      {
        label: 'Profile',
        screen: ScreenIDs.Profile,
        icon: IconAssets.Profile,
        selectedIcon: IconAssets.Profile,
        title: 'Profile',
        navigatorStyle: {
          statusBarColor: '#009688',
          navBarBackgroundColor: '#009688',
          navBarTextColor: '#fff',
        },
      },
    ],
    appStyle: {
      tabBarSelectedButtonColor: '#009688',
      forceTitlesDisplay: true,
      navBarTitleTextCentered: true,
      navBarBackgroundColor: 'white',
    },
  });
};

export const startLogin = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: ScreenIDs.LoginScreen,
      title: 'Login',
      navigatorStyle: {
        statusBarColor: '#009688',
        navBarBackgroundColor: '#009688',
        navBarTextColor: '#fff',
        navBarTitleTextCentered: true,
      },
    },
  });
};
// add here
