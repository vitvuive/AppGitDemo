/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILED,
} from './type';
const INIT_STATE = {
  email: '',
  password: '',
  messenger: '',
  user: undefined,
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
      };
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: '',
        password: '',
        messenger: '',
      };
    case REQUEST_LOGIN_FAILED:
      return {
        ...state,
        user: undefined,
        email: '',
        password: '',
        messenger: 'Login failed, try again!',
      };
    default:
      return state;
  }
};
