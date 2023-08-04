import {useEffect} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {acc} from 'react-native-reanimated';
import {Line} from 'react-native-svg';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import Card from '../globalcomponents/Card';
import FlexView from '../globalcomponents/FlexView';
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
          <View style={[globalstyles.center, {marginVertical: 20 * height}]}>
            {title ? (
              <StyledText style={globalstyles.h1}>{title}</StyledText>
            ) : (
              <></>
            )}
          </View>
          <View style={[globalstyles.center, {marginBottom: 20 * height}]}>
            <StyledText style={globalstyles.p1}>{description}</StyledText>
            {confirmText ? (
              <StyledText style={globalstyles.p1}>{confirmText}</StyledText>
            ) : (
              <></>
            )}
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
                    width: 1 * scale,
                    height: 50 * scale,
                  }}
                />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={onConfirm}>
                  <StyledText style={globalstyles.h3}>{accpetText}</StyledText>
                </TouchableOpacity>
              </>
            ) : (
              <></>
            )}
            {!rejectText ? (
              <TouchableOpacity
                style={[styles.modalButton, {width: 300 * width}]}
                onPress={onConfirm}>
                <StyledText style={globalstyles.h3}>{accpetText}</StyledText>
              </TouchableOpacity>
            ) : (
              <></>
            )}
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
  modalcontainer: {
    width: 300 * scale,
    height: 300 * scale,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * scale,
    height: 50 * scale,
  },
});
