/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { SEARCH_REQUEST, NAME_CHANGED } from './type';

export const onSearchRequest = name => {
  return {
    type: SEARCH_REQUEST,
    name,
  };
};
export const nameChanged = text => {
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};
