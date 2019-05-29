import _ from "lodash";
import { connect } from "react-redux";
import { nameChanged, onSearchRequest } from "../../stores/searchRepos/action";
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
class Home extends Component {
  _onNameChanged = text => {
    this.props.nameChanged(text);
  };
  _onHandleSearch = () => {
    this.props.onSearchRequest(this.props.name);
  };
  render() {
    console.log(this.props.dataApp.login);
    const { name, avatar_url } = this.props.dataApp;
    return (
      <View style={styles.conainter}>
        <View style={styles.containerSearch}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            placeholder="Search reposity"
            value={this.props.name}
            onChangeText={this._onNameChanged}
          />
          <TouchableOpacity onPress={this._onHandleSearch}>
            <Text>{"Search"}</Text>
          </TouchableOpacity>
        </View>
        <Text>{name}</Text>
        <Image
          source={{ uri: avatar_url }}
          style={{ height: 100, width: 100 }}
        />
        <View>
          <FlatList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conainter: {
    flex: 1
  },
  containerSearch: {
    backgroundColor: "#009688",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  textInput: {
    backgroundColor: "#fff",
    height: 40,
    marginRight: 16,
    flex: 1,
    borderRadius: 5
  }
});
const mapStateToProps = state => {
  // const dataApp = _.map(state.searchReducer.data, value => {
  //   return { value };
  // });
  return {
    name: state.searchReducer.name,
    dataApp: state.searchReducer.data
  };
};

export default connect(
  mapStateToProps,
  { onSearchRequest, nameChanged }
)(Home);
