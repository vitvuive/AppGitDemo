import { connect, } from 'react-redux';
import HomeScreen from './HomeScreen';
import _ from 'lodash';

import { actions, selectors, } from 'src/stores';

const mapStateToProps = (state) => {
  const dataApp = _.map(state.searchRepos.data, (value, key) => {
    return { ...value, key, };
  });
  return {
    isLoading: selectors.searchRepos.getLoading(state),
    name: selectors.searchRepos.getNameSearch(state),
    dataApp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nameChanged: (name) => {
      dispatch(actions.searchRepos.nameChanged(name));
    },
    onSearchRequest: () => {
      dispatch(actions.searchRepos.onSearchRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
