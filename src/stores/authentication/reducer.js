/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import Immutable from 'seamless-immutable';

import { Types, } from './action';
import { createReducer, } from '../helper-functions';

const INIT_STATE = Immutable({
  email: '',
  password: '',
  loading: false,
  isLogged: false,
  user: {},
});

const authenticationReducer = createReducer(INIT_STATE, {
  [Types.SET_STRING_EMAIL]: ({ state, action, }) => {
    if (typeof action.payload !== 'string') return state;
    return state.set('email', action.payload);
  },
  [Types.SET_STRING_PASSWORD]: ({ state, action, }) => {
    if (typeof action.payload !== 'string') return state;
    return state.set('password', action.payload);
  },
  [Types.SET_LOADING_STATUS]: ({ state, action, }) => {
    if (typeof action.payload !== 'boolean') return state;
    return state.set('loading', action.payload);
  },
  [Types.SET_IS_LOGGED]: ({ state, action, }) => {
    if (typeof action.payload !== 'boolean') return state;
    return state.set('isLogged', action.payload);
  },
  [Types.SET_USER]: ({ state, action, }) => {
    // if (typeof action.payload !== 'object') return state;
    return state.set({ user: action.payload, });
  },
});

export default authenticationReducer;
// export default (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case Types.EMAIL_CHANGED:
//       if (typeof action.payload !== 'string') return state;
//       return {
//         ...state,
//         email: action.payload,
//       };

//     case Types.PASSWORD_CHANGED:
//       if (typeof action.payload !== 'string') return state;
//       return {
//         ...state,
//         password: action.payload,
//       };

//     case Types.REQUEST_LOGIN:
//       return {
//         ...state,
//         loading: true,
//       };

//     case Types.REQUEST_LOGIN_SUCCESS:
//       if (typeof action.payload !== 'object') return state;
//       return {
//         ...state,
//         user: action.payload,
//         messenger: 'suceess',
//         loading: false,
//       };

//     case Types.REQUEST_LOGIN_FAILED:
//       return {
//         ...state,
//         user: undefined,
//         email: '',
//         password: '',
//         messenger: 'Username or password is incorrect, try again!',
//         loading: false,
//       };

//     case Types.REQUEST_LOGOUT:
//       return {
//         ...state,
//         loading: true,
//       };

//     case Types.REQUEST_LOGOUT_SUCCESS:
//       return {
//         ...state,
//         user: null,
//         email: '',
//         password: '',
//         messenger: '',
//         loading: false,
//       };

//     case Types.REQUEST_LOGOUT_FAILED:
//       return {
//         ...state,
//         messenger: 'Log Out F!',
//         loading: false,
//       };

//     default:
//       return state;
//   }
// };
