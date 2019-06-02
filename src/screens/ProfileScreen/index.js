import { connect, } from 'react-redux';
import ProfileScreen from './ProfileScreen';

import { actions, selectors, } from 'src/stores';

const mapStateToProps = (state) => {
  return {
    email: selectors.authentication.getLoginEmail(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestLogOut: () => {
      dispatch(actions.authentication.onRequestLogOut());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
