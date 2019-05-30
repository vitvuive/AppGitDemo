/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { REQUEST_LOGOUT } from './type';
export const onRequestLogOut = () => {
  return {
    type: REQUEST_LOGOUT,
  };
};
