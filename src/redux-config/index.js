/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { createStore, applyMiddleware, compose, } from 'redux';
import { Provider, } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { autoRehydrate, } from 'redux-persist';

import { rootReducer, } from 'src/stores';
import rootSaga from 'src/sagas';
import rehydrateStore from './rehydrateStore';

// middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware,];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);

const store = createStore(rootReducer, enhancer);
const startSaga = () => sagaMiddleware.run(rootSaga);

export { Provider, startSaga, rehydrateStore, store };
