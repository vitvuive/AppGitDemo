/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  onEmailChange,
  onPasswordChange,
  onLoginRequest,
} from 'src/stores/login/action';
class Login extends Component {
  _onEmailChanged = text => {
    this.props.onEmailChange(text);
  };
  _onPassChanged = text => {
    this.props.onPasswordChange(text);
  };
  _onHandleLogin = () => {
    const { email, password } = this.props;
    this.props.onLoginRequest(email, password);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            fontSize={18}
            keyboardType="email-address"
            // autoFocus
            value={this.props.email}
            onChangeText={this._onEmailChanged}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            fontSize={18}
            keyboardType="numeric"
            value={this.props.password}
            returnKeyType="go"
            onChangeText={this._onPassChanged}
            ref={input => {
              this.secondTextInput = input;
            }}
            onSubmitEditing={this._onHandleLogin}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this._onHandleLogin}
          >
            <Text style={{ fontSize: 18, color: '#FFF' }}>{'LOGIN'}</Text>
          </TouchableOpacity>
          <Text>{this.props.messenger}</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 24,
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'white',
    paddingHorizontal: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#dadada',
  },
  buttonStyle: {
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    paddingLeft: 24,
    paddingRight: 24,
  },
};
const mapStateToProps = state => {
  return {
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    messenger: state.loginReducer.messenger,
  };
};

export default connect(
  mapStateToProps,
  { onEmailChange, onPasswordChange, onLoginRequest },
)(Login);
