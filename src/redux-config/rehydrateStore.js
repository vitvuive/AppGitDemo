import { AsyncStorage as storage, } from 'react-native';
import { persistStore, } from 'redux-persist';

import transformer from './transform';

const persistcConfig = {
  storage,
  transforms: [transformer,],
  blacklist: ['searchRepos', 'form',],
};

export default function rehydrateStore(store) {
  if (!store) throw new Error('Can\'t start the redux without input store');

  return new Promise((resolve, reject) => {
    try {
      persistStore(store, persistcConfig, () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
