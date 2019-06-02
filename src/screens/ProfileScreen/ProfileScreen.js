import React, { Component, } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

import PropTypes from 'prop-types';
import { firebaseNana, } from 'src/firebase-service/firebase';

export default class ProfileScreen extends Component {
  static propTypes = {
    onRequestLogOut: PropTypes.func.isRequired, // not change

    email: PropTypes.string, // will change
  };

  state = { currentUser: null, };

  componentDidMount() {
    const { currentUser, } = firebaseNana.auth();

    this.setState({ currentUser, });
  }

  render() {
    const { currentUser, } = this.state;
    const { onRequestLogOut, email, } = this.props;
    return (
      <View style={style.container}>
        <Text>Welcome {currentUser && currentUser.email}</Text>
        <Text>{email}</Text>
        <TouchableOpacity style={style.buttonStyle} onPress={onRequestLogOut}>
          <Text style={{ fontSize: 18, color: '#FFF', }}>{'LOG OUT'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',

    flex: 1,
    padding: 24,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 40,

    borderRadius: 5,
    paddingLeft: 24,
    paddingRight: 24,

    backgroundColor: '#009688',
  },
});
