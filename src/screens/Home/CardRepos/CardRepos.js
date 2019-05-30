import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';

class CardRepos extends Component {
  // static propTypes = {
  //   data_res: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       name: PropTypes.string.isRequired,
  //       language: PropTypes.string.isRequired,
  //       created_at: PropTypes.string.isRequired,
  //       full_name: PropTypes.string.isRequired,
  //       html_url: PropTypes.string.isRequired,
  //       owner: PropTypes.arrayOf(
  //         PropTypes.shape({
  //           login: PropTypes.string.isRequired,
  //           avatar_url: PropTypes.string.isRequired,
  //         }).isRequired,
  //       ),
  //     }).isRequired,
  //   ),
  // };
  render() {
    const { data_res } = this.props;
    const { name, full_name, language, created_at, html_url } = data_res;
    const { login, avatar_url } = data_res.owner;
    return (
      <TouchableOpacity style={styles.container} onPress={() => alert(name)}>
        <Image
          source={{ uri: avatar_url }}
          style={{ height: 100, width: 100 }}
        />
        <View style={styles.contentStyle}>
          <Text style={{ color: '#fff', fontSize: 19 }}>{name}</Text>
          <Text style={styles.textStyle}>Language: {language}</Text>
          <Text style={styles.textStyle}>Created_at: {created_at}</Text>
          <Text
            style={{ color: '#101B6F', fontSize: 18 }}
            onPress={() => {
              Linking.openURL(html_url);
            }}
          >
            Watch this repository
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#009688',
    borderColor: '#009688',
    margin: 8,
    // borderRadius: 5,
    // padding: 8,
  },
  contentStyle: {
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textStyle: {
    color: 'white',
  },
});
export default CardRepos;
