/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */

import { Types as authenticationTypes, } from './type';
import { Actions as authenticationActions, } from './action';
import authenticationReducers from './reducer';
import { Selectors as authenticationSelectors, } from './selectors';

export {
  authenticationTypes,
  authenticationActions,
  authenticationReducers,
  authenticationSelectors
};
