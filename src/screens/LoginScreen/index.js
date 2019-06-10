/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import { connect, } from 'react-redux';
import { reduxForm, } from 'redux-form';

import { selectors, actions, } from 'src/stores';

import LoginScreen from './LoginScreen';

const mapStateToProps = (state) => {
  return {
    email: selectors.authentication.getLoginEmail(state),
    password: selectors.authentication.getLoginPassword(state),
    loading: selectors.authentication.getLoading(state),
  };
};

const mapDispatchToProps = {
  onEmailChange: actions.authentication.setEmailString,
  onPasswordChange: actions.authentication.setPasswordString,
  onLoginRequest: actions.authentication.onRequestLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'Login field validate', // a unique identifier for this form
  })(LoginScreen),
);
