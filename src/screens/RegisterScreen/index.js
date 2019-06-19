import RegisterScreen from './RegisterScreen';

import { reduxForm, } from 'redux-form';
import { connect, } from 'react-redux';

import { selectors, actions, } from 'src/stores';

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
  onRequestRegister: actions.authentication.onRequestRegister,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'Register field validate', // a unique identifier for this form
  })(RegisterScreen),
);
