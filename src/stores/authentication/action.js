/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { Types, } from './type';

const onEmailChange = (text) => {
  return {
    type: Types.EMAIL_CHANGED,
    payload: text,
  };
};

const onPasswordChange = (text) => {
  return {
    type: Types.PASSWORD_CHANGED,
    payload: text,
  };
};

const onLoginRequest = () => {
  return {
    type: Types.REQUEST_LOGIN,
  };
};
const onLoginSuccess = (data) => {
  return {
    type: Types.REQUEST_LOGIN_SUCCESS,
    data,
  };
};
const onLoginFailed = () => {
  return {
    type: Types.REQUEST_LOGIN_FAILED,
  };
};
const onRequestLogOut = () => {
  return {
    type: Types.REQUEST_LOGOUT,
  };
};

const onLogOutSucess = () => {
  return {
    type: Types.REQUEST_LOGOUT_SUCCESS,
  };
};

const onLogOutFailed = (text) => {
  return {
    type: Types.REQUEST_LOGOUT_FAILED,
    payload: text,
  };
};

const Actions = {
  onEmailChange,
  onPasswordChange,
  onLoginRequest,
  onLoginSuccess,
  onLoginFailed,
  onRequestLogOut,
  onLogOutFailed,
  onLogOutSucess,
};

export { Actions };
