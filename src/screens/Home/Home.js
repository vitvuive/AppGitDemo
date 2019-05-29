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
import CardRepos from "./CardRepos/CardRepos";
class Home extends Component {
  _onNameChanged = text => {
    this.props.nameChanged(text);
  };
  _onHandleSearch = () => {
    this.props.onSearchRequest(this.props.name);
  };
  render() {
    console.log(this.props.dataApp);
    const { name, avatar_url } = this.props.dataApp;
    return (
      <View style={styles.conainter}>
        <View style={styles.containerSearch}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            placeholder="Search your repositories"
            value={this.props.name}
            onChangeText={this._onNameChanged}
            onSubmitEditing={this._onHandleSearch}
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
          <FlatList
            data={this.props.dataApp}
            renderItem={({ item }) => <CardRepos data_res={item} />}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
          />
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
    height: 60,
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
  const dataApp = _.map(state.searchReducer.data, (value, key) => {
    return { ...value, key };
  });
  return {
    name: state.searchReducer.name,
    dataApp
  };
};

export default connect(
  mapStateToProps,
  { onSearchRequest, nameChanged }
)(Home);
