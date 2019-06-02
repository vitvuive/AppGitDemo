import React, { Component, } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

import PropTypes from 'prop-types';

export default class CardRepos extends Component {
  static propTypes = {
    data_res: PropTypes.object.isRequired, //will change
    name: PropTypes.string, //will change
    full_name: PropTypes.string, //will change
    language: PropTypes.string, //will change
    created_at: PropTypes.string, //will change
    html_url: PropTypes.string, //will change
    avatar_url: PropTypes.string, //will change
  };

  render() {
    const { data_res, } = this.props;
    const { name, language, created_at, html_url, } = data_res;
    const { avatar_url, } = data_res.owner;
    return (
      <TouchableOpacity style={styles.container} onPress={() => alert(name)}>
        <Image
          source={{ uri: avatar_url, }}
          style={{ height: 100, width: 100, }}
        />
        <View style={styles.contentStyle}>
          <Text style={{ color: '#fff', fontSize: 19, }}>{name}</Text>
          <Text style={styles.textStyle}>Language: {language}</Text>
          <Text style={styles.textStyle}>Created_at: {created_at}</Text>
          <Text
            style={{ color: '#101B6F', fontSize: 18, }}
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
    margin: 8,

    borderColor: '#009688',
    backgroundColor: '#009688',
  },
  contentStyle: {
    height: 100,

    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textStyle: {
    color: 'white',
  },
});
