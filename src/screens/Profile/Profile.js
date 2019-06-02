import React, { Component, } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { connect, } from 'react-redux';
import { onRequestLogOut, } from '../../stores/logOut/action';
import { firebaseNana, } from '../../firebase-service/firebase';

class Profile extends Component {
  state = { currentUser: null, };
  componentDidMount() {
    const { currentUser, } = firebaseNana.auth();

    this.setState({ currentUser, });
  }
  _handleLogOut = () => {
    this.props.onRequestLogOut();
  };
  render() {
    const { currentUser, } = this.state;
    console.log(this.props.email);
    return (
      <View style={style.container}>
        <Text>Hi {currentUser && currentUser.email}</Text>
        <Text>{this.props.email}</Text>
        <TouchableOpacity
          style={style.buttonStyle}
          onPress={this._handleLogOut}
        >
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
const mapStateToProps = (state) => {
  return {
    email: state.loginReducer.email,
  };
};
export default connect(
  null,
  { onRequestLogOut, },
)(Profile);
