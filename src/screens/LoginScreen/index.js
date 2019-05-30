/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { connect, } from 'react-redux';

import {
  onEmailChange,
  onPasswordChange,
  onLoginRequest,
} from 'src/stores/login/action';

import { selectors, } from 'src/stores';

import LoginScreen from './LoginScreen';

const mapStateToProps = (state) => {
  return {
    email: selectors.login.getLoginEmail(state),
    password: selectors.login.getLoginPassword(state),
    messenger: selectors.login.getLoginMsg(state),
  };
};

export default connect(
  mapStateToProps,
  { onEmailChange, onPasswordChange, onLoginRequest, },
)(LoginScreen);
