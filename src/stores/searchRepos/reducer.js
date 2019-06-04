/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import Immutable from 'seamless-immutable';

import { createReducer, } from '../helper-functions';
import { Types, } from './action';
const INIT_STATE = Immutable({
  name: '',
  data: [],
  loading: false,
});

const searchReposReducer = createReducer(INIT_STATE, {
  [Types.SET_LOADING_STATUS]: ({ state, action, }) => {
    if (typeof action.payload !== 'boolean') return state;
    return state.set('loading', action.payload);
  },
  [Types.SET_DATA_RESPOS]: ({ state, action, }) => {
    if (!Array.isArray(action.payload)) return state;
    return state.set('data', action.payload);
  },
  [Types.SET_SEARCH_STRING]: ({ state, action, }) => {
    if (typeof action.payload !== 'string') return state;
    return state.set('name', action.payload);
  },
});

export default searchReposReducer;

// export default (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case Types.SEARCH_REQUEST:
//       return {
//         ...state,
//         messenger: 'Searching...',
//         loading: true,
//       };

//     case Types.SEARCH_REQUEST_SUCCESS:
//       if (typeof action.payload !== 'object') return state;
//       return {
//         ...state,
//         data: action.payload,
//         messenger: 'Success',
//         loading: false,
//         name: '',
//       };

//     case Types.SEARCH_REQUEST_FAILED:
//       return {
//         ...state,
//         messenger: 'Search failed',
//         loading: false,
//       };

//     case Types.NAME_CHANGED:
//       if (typeof action.payload !== 'string') return state;
//       return {
//         ...state,
//         name: action.payload,
//       };

//     default:
//       return state;
//   }
// };
