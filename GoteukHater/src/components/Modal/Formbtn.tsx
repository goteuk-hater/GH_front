import React from 'react';
import {Text, StyleSheet, View, Platform, SafeAreaView} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ModalButton from './ModalButton';

import BtnScreen from '../../screen/reservationscreen/BtnScreen';
import {height, scale, width} from '../../../config/globalStyles';
import SheetHandle from '../globalcomponents/SheetHandle';

const Formbtn = () => {
  const snapPoints = React.useMemo(() => [790 * height], []);
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const modalclose = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  return (
    <BottomSheetModalProvider>
      <SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          enablePanDownToClose={true}
          enableContentPanningGesture={true}
          handleIndicatorStyle={{
            backgroundColor: 'rgba(60, 60, 67, 0.3)',
          }}
          style={styles.modalbackground}
          backgroundStyle={styles.modalbackground}
          handleStyle={styles.handle}
          snapPoints={snapPoints}
          handleComponent={() => <SheetHandle />}>
          <BtnScreen close={modalclose} />
        </BottomSheetModal>
        <ModalButton handlePresentModalPress={handlePresentModalPress} />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  modalbackground: {
    backgroundColor: '#F6F6F9',
  },
  handle: {
    backgroundColor: '#F6F6F9',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});
export default Formbtn;
