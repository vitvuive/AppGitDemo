/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { Types, } from './type';

const onSearchRequest = (name) => {
  return {
    type: Types.SEARCH_REQUEST,
    name,
  };
};

const nameChanged = (text) => {
  return {
    type: Types.NAME_CHANGED,
    payload: text,
  };
};

const Actions = {
  onSearchRequest,
  nameChanged,
};

export { Actions };
