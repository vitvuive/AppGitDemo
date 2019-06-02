import { connect, } from 'react-redux';
import ProfileScreen from './ProfileScreen';

import { actions, } from 'src/stores';

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestLogOut: () => {
      dispatch(actions.authentication.onRequestLogOut());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ProfileScreen);
