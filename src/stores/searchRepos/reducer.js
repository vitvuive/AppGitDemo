/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import Immutable from 'seamless-immutable';
import { Types, } from './type';
const INIT_STATE = Immutable({
  name: '',
  data: [],
  messenger: '',
  loading: false,
});
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_REQUEST:
      return {
        ...state,
        messenger: 'Searching...',
        loading: true,
      };

    case Types.SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        messenger: 'Success',
        loading: false,
        name: '',
      };

    case Types.SEARCH_REQUEST_FAILED:
      return {
        ...state,
        messenger: 'Search failed',
        loading: false,
      };

    case Types.NAME_CHANGED:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
