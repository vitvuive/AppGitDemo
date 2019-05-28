import { EMAIL_CHANGED, PASSWORD_CHANGED, REQUEST_LOGIN } from "./type";
export const onEmailChange = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const onPasswordChange = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const onLoginRequest = (email, password) => {
  return {
    type: REQUEST_LOGIN,
    email,
    password
  };
};
