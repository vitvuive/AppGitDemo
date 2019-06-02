import React, { Component, } from 'react';
import { View, ActivityIndicator, } from 'react-native';
import { connect, } from 'react-redux';
import { actions, } from 'src/stores';
class Starting extends Component {
  componentDidMount() {
    this.props.onUserRequest();
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

const mapDispatch = (dispatch) => {
  return {
    onUserRequest: () => {
      dispatch(actions.authentication.onUserRequest());
    },
  };
};
export default connect(
  null,
  mapDispatch,
)(Starting);
