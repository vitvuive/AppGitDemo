/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import React, { Component, } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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

  _regPasswordRef = (r) => (this.passwordInput = r);

  _focusPassword = () => this.passwordInput && this.passwordInput.focus();

  render() {
    const {
      email,
      password,
      loading,
      onEmailChange,
      onPasswordChange,
      onLoginRequest,
    } = this.props;

    return (
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.containerText}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={onEmailChange}
              onSubmitEditing={this._focusPassword}
              underlineColorAndroid="transparent"
              placeholder="Email"
              fontSize={18}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <TextInput
              ref={this._regPasswordRef}
              style={styles.input}
              value={password}
              onChangeText={onPasswordChange}
              onSubmitEditing={onLoginRequest}
              underlineColorAndroid="transparent"
              placeholder="Password"
              secureTextEntry={true}
              fontSize={18}
              returnKeyType="go"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={onLoginRequest}
            >
              <Text style={{ fontSize: 18, color: '#FFF', }}>{'LOGIN'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ModalLoading visible={loading} />
      </ScrollView>
    );
  }
}
const styles = {
  scrollView: {
    backgroundColor: '#EEEEEE',
  },
  container: {
    padding: 24,
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 250,

    paddingHorizontal: 10,
    margin: 10,

    borderBottomWidth: 1,
    borderColor: '#dadada',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 40,
    paddingLeft: 24,
    paddingRight: 24,

    borderRadius: 5,

    backgroundColor: '#009688',
  },
};
