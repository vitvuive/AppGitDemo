/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import React from 'react';
import { View, ActivityIndicator, Modal, } from 'react-native';

const ModalLoading = ({ visible, }) => {
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

export default ModalLoading;
