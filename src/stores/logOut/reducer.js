import {
  REQUEST_LOGOUT,
  REQUEST_LOGOUT_FAILED,
  REQUEST_LOGOUT_SUCCESS
} from "./type";
const INIT_STATE = {
  loading: false,
  messenger: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOGOUT:
      return {
        ...state,
        loading: true
      };
    case REQUEST_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        messenger: "Success"
      };
    case REQUEST_LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        messenger: "Log Out Failed"
      };

    default:
      return state;
  }
};
