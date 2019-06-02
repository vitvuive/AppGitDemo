/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';

import LoginScreen from './LoginScreen';

const mapStateToProps = (state) => {
  return {
    email: selectors.authentication.getLoginEmail(state),
    password: selectors.authentication.getLoginPassword(state),
    messenger: selectors.authentication.getLoginMsg(state),
    loading: selectors.authentication.getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (email) => {
      dispatch(actions.authentication.onEmailChange(email));
    },
    onPasswordChange: (password) => {
      dispatch(actions.authentication.onPasswordChange(password));
    },
    onLoginRequest: () => {
      dispatch(actions.authentication.onLoginRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
