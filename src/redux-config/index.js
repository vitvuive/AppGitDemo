/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { createStore, applyMiddleware, compose, } from 'redux';
import { Provider, } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootReducer, } from '../stores';
import rootSaga from '../sagas';

// middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware,];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);
const startSaga = () => sagaMiddleware.run(rootSaga);

export { store, Provider, startSaga };
