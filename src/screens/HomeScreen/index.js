import { connect, } from 'react-redux';

import HomeScreen from './HomeScreen';

import { actions, selectors, } from 'src/stores';

const mapStateToProps = (state) => {
  return {
    isLoading: selectors.searchRepos.getLoadingStatus(state),
    nameSearchChange: selectors.searchRepos.getNameSearch(state),
    dataApp: selectors.searchRepos.getReposData(state),
  };
};

const mapDispatchToProps = {
  onSearchStringChange: actions.searchRepos.setSearchString,
  onSearchRequest: actions.searchRepos.fetchRepos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

// const mapDispatchToProps = (dispatch) => ({
//   onSearchStringChange: (nameSearch) => {
//     dispatch(actions.searchRepos.setSearchString(nameSearch));
//   },
//   onSearchRequest: () => {
//     dispatch(actions.searchRepos.fetchRepos());
//   },
// });
