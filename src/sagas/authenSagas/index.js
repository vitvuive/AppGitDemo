/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { watchLogin, } from './watchLogin';
import { watchLogOut, } from './watchLogOut';
import { watchRegister, } from './watchRegister';

export default [watchLogin(), watchLogOut(), watchRegister(),];
