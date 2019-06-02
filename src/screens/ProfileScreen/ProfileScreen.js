import React, { Component, } from 'react';
import { firebaseNana, } from 'src/firebase-service/firebase';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';

export default class ProfileScreen extends Component {
  static propTypes = {
    onRequestLogOut: PropTypes.func.isRequired, // not change
  };
  state = { currentUser: null, };
  componentDidMount() {
    const { currentUser, } = firebaseNana.auth();

    this.setState({ currentUser, });
  }

  render() {
    const { currentUser, } = this.state;
    const { onRequestLogOut, } = this.props;
    return (
      <View style={style.container}>
        <Text>Hi {currentUser && currentUser.email}</Text>
        <Text>{this.props.email}</Text>
        <TouchableOpacity style={style.buttonStyle} onPress={onRequestLogOut}>
          <Text style={{ fontSize: 18, color: '#FFF', }}>{'LOG OUT'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
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
});
