import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking
} from "react-native";
class CardRepos extends Component {
  render() {
    const {
      name,
      full_name,
      id,
      language,
      created_at,
      html_url
    } = this.props.data_res;
    const { login, avatar_url } = this.props.data_res.owner;
    return (
      <TouchableOpacity style={styles.container} onPress={() => alert(name)}>
        <Image
          source={{ uri: avatar_url }}
          style={{ height: 100, width: 100 }}
        />
        <Text>Name Repository: {name}</Text>
        <Text>Language: {language}</Text>
        <Text>Created_at: {created_at}</Text>
        <Text
          onPress={() => {
            Linking.openURL(html_url);
          }}
        >
          Watch this repository
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#009688",
    margin: 8,
    borderRadius: 5,
    padding: 8
  }
});
export default CardRepos;
