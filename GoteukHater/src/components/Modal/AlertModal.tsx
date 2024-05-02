import {useEffect} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {globalStyle, height, scale, width} from '@/config/globalStyle';

import StyledText from '../global/StyledText';

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
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <View style={styles.modalcontent}>
            <View style={[globalStyle.center]}>
              {title ? (
                <StyledText style={globalStyle.h1}>{title}</StyledText>
              ) : null}
            </View>
            <View style={[globalStyle.center]}>
              <StyledText style={globalStyle.p1}>{description}</StyledText>
              {confirmText ? (
                <StyledText style={globalStyle.p1}>{confirmText}</StyledText>
              ) : null}
            </View>
          </View>

          <View
            style={[
              globalStyle.row_space_between,
              {
                borderTopWidth: 1,
                borderColor: '#EFEFF0',
              },
            ]}>
            {rejectText ? (
              <>
                <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                  <StyledText style={globalStyle.h3}>{rejectText}</StyledText>
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
                  <StyledText style={globalStyle.h3}>{accpetText}</StyledText>
                </TouchableOpacity>
              </>
            ) : null}
            {!rejectText ? (
              <TouchableOpacity
                style={styles.modalbigButton}
                onPress={onConfirm}>
                <StyledText style={globalStyle.h3}>{accpetText}</StyledText>
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
