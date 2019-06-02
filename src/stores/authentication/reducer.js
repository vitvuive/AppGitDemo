/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { Types, } from './type';

const INIT_STATE = {
  email: '',
  password: '',
  messenger: '',
  user: undefined,
  loading: false,
};

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
        email: '',
        password: '',
        messenger: 'suceess',
        loading: false,
      };

    case Types.REQUEST_LOGIN_FAILED:
      return {
        ...state,
        user: undefined,
        email: '',
        password: '',
        messenger: 'Login failed, try again!',
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
        email: '',
        password: '',
        messenger: 'Success Log out',
        loading: false,
      };

    case Types.REQUEST_LOGOUT_FAILED:
      return {
        ...state,
        messenger: 'Log Out Failed! try again!',
        loading: false,
      };

    default:
      return state;
  }
};
