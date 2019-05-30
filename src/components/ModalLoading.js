/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import React, { Component } from 'react';
import { View, ActivityIndicator, Modal, Text } from 'react-native';
const ModalLoading = ({ visible }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};
const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
};

export default ModalLoading;
