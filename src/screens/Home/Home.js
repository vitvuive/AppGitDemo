/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import _ from 'lodash';
import { connect } from 'react-redux';
import { nameChanged, onSearchRequest } from 'src/stores/searchRepos/action';
import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import CardRepos from './CardRepos/CardRepos';
import { IconAssets } from 'src/assets';
import ModalLoading from '../../components/ModalLoading';
class Home extends Component {
  _onNameChanged = text => {
    this.props.nameChanged(text);
  };
  _onHandleSearch = () => {
    this.props.onSearchRequest(this.props.name);
  };
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    logErrorToMyService(error, info);
  }
  render() {
    console.log(this.props.dataApp);
    const { name, avatar_url } = this.props.dataApp;
    return (
      <View style={styles.conainter}>
        <View style={styles.containerSearch}>
          <View style={styles.wapperInput}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInput}
              placeholder="Enter user name on Github"
              value={this.props.name}
              onChangeText={this._onNameChanged}
              onSubmitEditing={this._onHandleSearch}
            />

            <TouchableOpacity onPress={this._onHandleSearch}>
              <Image
                source={IconAssets.SearchIcon}
                style={{ tintColor: '#009688', height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={this.props.dataApp}
            renderItem={({ item }) => <CardRepos data_res={item} />}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <ModalLoading visible={this.props.isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conainter: {
    flex: 1,
  },
  containerSearch: {
    backgroundColor: '#009688',
    height: 60,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
  },
  wapperInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 40,
    marginRight: 16,
    flex: 1,
    margin: 3,
    fontSize: 16,
  },
});
const mapStateToProps = state => {
  const dataApp = _.map(state.searchReducer.data, (value, key) => {
    return { ...value, key };
  });
  return {
    isLoading: state.searchReducer.loading,
    name: state.searchReducer.name,
    dataApp,
  };
};

export default connect(
  mapStateToProps,
  { onSearchRequest, nameChanged },
)(Home);
