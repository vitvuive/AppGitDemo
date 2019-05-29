import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_FAILED,
  SEARCH_REQUEST_SUCCESS,
  NAME_CHANGED
} from "./type";
const INIT_STATE = {
  name: "",
  data: [],
  messenger: ""
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        messenger: "Searching..."
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        messenger: "Success"
      };
    case SEARCH_REQUEST_FAILED:
      return {
        ...state,
        messenger: "Search failed"
      };
    case NAME_CHANGED:
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
};
