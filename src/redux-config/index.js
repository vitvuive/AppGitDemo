/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootReducer } from '../stores';
import rootSaga from '../sagas';
// middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

//store

const store = createStore(rootReducer, applyMiddleware(...middleware));
const startSaga = () => sagaMiddleware.run(rootSaga);
export { store, Provider, startSaga };
