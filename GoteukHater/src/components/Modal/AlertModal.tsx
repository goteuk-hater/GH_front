import {useEffect} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';

import StyledText from '../globalcomponents/StyledText';

interface Props {
  visible: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  accpetText: string;
  rejectText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

export const AlertModal = ({
  visible,
  title,
  description,
  confirmText,
  accpetText,
  rejectText,
  onConfirm,
  onClose,
}: Props) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <View style={styles.modalcontent}>
            <View style={[globalstyles.center]}>
              {title ? (
                <StyledText style={globalstyles.h1}>{title}</StyledText>
              ) : null}
            </View>
            <View style={[globalstyles.center]}>
              <StyledText style={globalstyles.p1}>{description}</StyledText>
              {confirmText ? (
                <StyledText style={globalstyles.p1}>{confirmText}</StyledText>
              ) : null}
            </View>
          </View>

          <View
            style={[
              globalstyles.row_spacebetween,
              {
                borderTopWidth: 1,
                borderColor: '#EFEFF0',
              },
            ]}>
            {rejectText ? (
              <>
                <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                  <StyledText style={globalstyles.h3}>{rejectText}</StyledText>
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#EFEFF0',
                    width: 2 * scale,
                    height: 50 * scale,
                  }}
                />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={onConfirm}>
                  <StyledText style={globalstyles.h3}>{accpetText}</StyledText>
                </TouchableOpacity>
              </>
            ) : null}
            {!rejectText ? (
              <TouchableOpacity
                style={styles.modalbigButton}
                onPress={onConfirm}>
                <StyledText style={globalstyles.h3}>{accpetText}</StyledText>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalcontent: {
    padding: 20 * scale,
    rowGap: 20 * height,
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 134 * scale,
    height: 50 * scale,
  },
  modalbigButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 270 * width,
    height: 50 * scale,
  },
});
