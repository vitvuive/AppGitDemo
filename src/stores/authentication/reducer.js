/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import Immutable from 'seamless-immutable';
import { Types, } from './type';

const INIT_STATE = Immutable({
  email: '',
  password: '',
  messenger: '',
  loading: false,
  user: undefined,
});

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
      };

    case Types.PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
      };

    case Types.REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case Types.REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        messenger: 'suceess',
        loading: false,
      };

    case Types.REQUEST_LOGIN_FAILED:
      return {
        ...state,
        user: undefined,
        email: '',
        password: '',
        messenger: 'Username or password is incorrect, try again!',
        loading: false,
      };

    case Types.REQUEST_LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case Types.REQUEST_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        email: '',
        password: '',
        messenger: '',
        loading: false,
      };

    case Types.REQUEST_LOGOUT_FAILED:
      return {
        ...state,
        messenger: 'Log Out F!',
        loading: false,
      };

    default:
      return state;
  }
};
