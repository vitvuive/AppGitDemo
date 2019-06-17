import React from 'react';
import { View, Text, TextInput, } from 'react-native';
const MyInput = ({
  label,
  keyboardType,
  onChangeText,
  value,
  returnKeyType,
  secureTextEntry,
  refWith,
  onSubmitEditing,
  meta: { touched, error, warning, },
  input: { ...resInput },
}) => {
  return (
    <View style={styles.wapperField}>
      <TextInput
        style={styles.input}
        placeholder={label}
        underlineColorAndroid="transparent"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        ref={refWith}
        onSubmitEditing={onSubmitEditing}
        {...resInput}
      />
      {touched &&
        ((error && <Text style={styles.errorText}>{error}</Text>) ||
          (warning && <Text style={styles.textError}>{warning}</Text>))}
    </View>
  );
};

export default MyInput;

const styles = {
  wapperField: {
    height: 70,
  },
  input: {
    height: 40,
    width: 250,

    fontSize: 18,
    paddingHorizontal: 10,
    margin: 10,

    borderBottomWidth: 1,
    borderColor: '#dadada',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 10,
  },
};
