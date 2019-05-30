/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_FAILED,
  SEARCH_REQUEST_SUCCESS,
  NAME_CHANGED,
} from './type';
const INIT_STATE = {
  name: '',
  data: [],
  messenger: '',
  loading: false,
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        messenger: 'Searching...',
        loading: true,
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        messenger: 'Success',
        loading: false,
        name: '',
      };
    case SEARCH_REQUEST_FAILED:
      return {
        ...state,
        messenger: 'Search failed',
        loading: false,
      };
    case NAME_CHANGED:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
