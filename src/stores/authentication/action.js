/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { firebaseNana, } from 'src/firebase-service/firebase';
import * as AppController from 'src/AppController';
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

const onUserRequest = () => {
  return (dispatch) => {
    firebaseNana.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: Types.REQUEST_LOGIN_SUCCESS,
          payload: user,
        });
        AppController.startMainApp();
      } else {
        AppController.startLogin();
      }
    });
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
  onUserRequest,
};

export { Actions };
