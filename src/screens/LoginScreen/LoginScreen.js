/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import React, { Component, } from 'react';
import { ScrollView, View, Text, TouchableOpacity, } from 'react-native';
import { Field, } from 'redux-form';

import { emailVal, requiredVal, minLength6, } from './validate';
import MyInput from 'src/components/MyInput';
import ModalLoading from 'src/components/ModalLoading';

import PropTypes from 'prop-types';

export default class LoginScreen extends Component {
  static propTypes = {
    onEmailChange: PropTypes.func.isRequired, // No change
    onPasswordChange: PropTypes.func.isRequired, // No change
    onLoginRequest: PropTypes.func.isRequired, // No change

    email: PropTypes.string.isRequired, // Will change
    password: PropTypes.string.isRequired, // Will change
    loading: PropTypes.bool.isRequired, //will change
  };

  shouldComponentUpdate({ email, password, loading, }) {
    return (
      this.props.email !== email ||
      this.props.password !== password ||
      this.props.loading !== loading
    );
  }
  _submit = (values) => {
    alert(`validate success, value = ${JSON.stringify(values)}`);
  };
  _regPasswordRef = (r) => (this.passwordInput = r);

  _focusPassword = () => this.passwordInput && this.passwordInput.focus();

  render() {
    const {
      handleSubmit,
      onLoginRequest,
      onEmailChange,
      onPasswordChange,
      email,
      password,
      loading,
    } = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
        <View style={styles.containerText}>
          <Field
            value={email}
            onChangeText={onEmailChange}
            onSubmitEditing={this._focusPassword}
            validate={[emailVal, requiredVal,]}
            component={MyInput}
            name="email"
            label={'Email'}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Field
            ref={this._regPasswordRef}
            value={password}
            onChangeText={onPasswordChange}
            onSubmitEditing={handleSubmit(onLoginRequest)}
            validate={[requiredVal, minLength6,]}
            component={MyInput}
            secureTextEntry
            name="password"
            label={'Password'}
            keyboardType="default"
            returnKeyType="go"
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleSubmit(onLoginRequest)}
          >
            <Text>{'LOGIN'}</Text>
          </TouchableOpacity>
        </View>
        <ModalLoading visible={loading} />
      </ScrollView>
    );
  }
}
const styles = {
  scrollView: {
    padding: 24,

    backgroundColor: '#EEEEEE',
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 40,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 8,

    borderRadius: 5,

    backgroundColor: '#009688',
  },
  textError: {
    fontSize: 18,

    color: '#FFF',
  },
};
