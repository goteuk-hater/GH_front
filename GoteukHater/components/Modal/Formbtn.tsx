import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {height, scale, width} from '../../config/globalStyles';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BtnScreen from '../../screen/reservationscreen/BtnScreen';
import ModalButton from './ModalButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {onClose} from 'react-native-actions-sheet-picker';

const Formbtn = () => {
  const snapPoints = React.useMemo(() => [800 * height], []);
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const modalclose = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enableContentPanningGesture={true}
        enablePanDownToClose={true}
        animateOnMount={true}
        handleIndicatorStyle={{backgroundColor: 'rgba(60, 60, 67, 0.3)'}}
        backgroundStyle={styles.modalbackground}
        handleStyle={styles.handle}
        snapPoints={snapPoints}>
        <BtnScreen close={modalclose} />
      </BottomSheetModal>
      <ModalButton
        handlePresentModalPress={handlePresentModalPress}
        bottomSheetModalRef={bottomSheetModalRef}
      />
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  modalbackground: {
    marginTop: 5 * height,
    shadowColor: '#000',
    shadowOffset: {
      width: 1 * width,
      height: 12 * height,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderTopRightRadius: 24 * width,
    borderTopLeftRadius: 24 * width,
    elevation: 24,
  },
  handle: {
    backgroundColor: '#F6F6F9',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});
export default Formbtn;
