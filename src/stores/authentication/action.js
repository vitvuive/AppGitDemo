/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
// import { Types, } from './type';

const ReducerTypes = {
  SET_STRING_EMAIL: 'authentication.SET_STRING_EMAIL',
  SET_STRING_PASSWORD: 'authentication.SET_STRING_PASSWORD',
  SET_LOADING_STATUS: 'authentication.SET_LOADING_STATUS',
  SET_USER: 'authentication.SET_USER',
  SET_IS_LOGGED: 'authentication.SET_IS_LOGGED',
};

const SagaTypes = {
  LOGIN_REQUEST: 'authentication@LOGIN_REQUEST',
  LOGOUT_REQUSET: 'authentication@LOGOUT_REQUSET',
};

const Types = {
  ...ReducerTypes,
  ...SagaTypes,
};

const ReducerAction = {
  setLoggedStatus: (status: boolean = false) => ({
    type: ReducerTypes.SET_IS_LOGGED,
    payload: status,
  }),
  setLoadingStatus: (status: boolean = false) => ({
    type: ReducerTypes.SET_LOADING_STATUS,
    payload: status,
  }),
  setEmailString: (email: string = '') => ({
    type: ReducerTypes.SET_STRING_EMAIL,
    payload: email,
  }),
  setPasswordString: (email: string = '') => ({
    type: ReducerTypes.SET_STRING_PASSWORD,
    payload: email,
  }),
  setDataUser: (data) => ({
    type: ReducerTypes.SET_USER,
    payload: data,
  }),
};

const SagaAction = {
  onRequestLogin: () => ({
    type: SagaTypes.LOGIN_REQUEST,
  }),
  onRequestLogOut: () => ({
    type: SagaTypes.LOGOUT_REQUSET,
  }),
};

const Actions = {
  ...ReducerAction,
  ...SagaAction,
};

export { Actions, Types };
// const onEmailChange = (text) => {
//   return {
//     type: Types.EMAIL_CHANGED,
//     payload: text,
//   };
// };

// const onPasswordChange = (text) => {
//   return {
//     type: Types.PASSWORD_CHANGED,
//     payload: text,
//   };
// };

// const onLoginRequest = () => {
//   return {
//     type: Types.REQUEST_LOGIN,
//   };
// };

// const onLoginSuccess = (data) => {
//   return {
//     type: Types.REQUEST_LOGIN_SUCCESS,
//     data,
//   };
// };

// const onLoginFailed = () => {
//   return {
//     type: Types.REQUEST_LOGIN_FAILED,
//   };
// };

// const onRequestLogOut = () => {
//   return {
//     type: Types.REQUEST_LOGOUT,
//   };
// };

// const onLogOutSucess = () => {
//   return {
//     type: Types.REQUEST_LOGOUT_SUCCESS,
//   };
// };

// const onLogOutFailed = (text) => {
//   return {
//     type: Types.REQUEST_LOGOUT_FAILED,
//     payload: text,
//   };
// };

// const Actions = {
//   onEmailChange,
//   onPasswordChange,
//   onLoginRequest,
//   onLoginSuccess,
//   onLoginFailed,
//   onRequestLogOut,
//   onLogOutFailed,
//   onLogOutSucess,
// };
