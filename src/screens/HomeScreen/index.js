import { connect, } from 'react-redux';
import _ from 'lodash';

import HomeScreen from './HomeScreen';

import { actions, selectors, } from 'src/stores';

const mapStateToProps = (state) => {
  // TODO: selector
  return {
    isLoading: selectors.searchRepos.getLoading(state),
    name: selectors.searchRepos.getNameSearch(state),
    dataApp: state.searchRepos.data,
  };
};

const mapDispatchToProps = {
  nameChanged: actions.searchRepos.nameChanged,
  onSearchRequest: actions.searchRepos.onSearchRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
