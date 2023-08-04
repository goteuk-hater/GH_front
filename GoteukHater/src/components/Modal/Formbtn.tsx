import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ModalButton from './ModalButton';

import BtnScreen from '../../screen/reservationscreen/BtnScreen';
import {height, scale, width} from '../../../config/globalStyles';
import {Ptsd} from '../../screen/main/Ptsd';

const Formbtn = () => {
  const snapPoints = React.useMemo(() => [80 * height, 800 * height], []);
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const [index, setIndex] = React.useState<number>(0);
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
        index={1}
        enablePanDownToClose={false}
        enableContentPanningGesture={true}
        animateOnMount={true}
        handleIndicatorStyle={{backgroundColor: 'rgba(60, 60, 67, 0.3)'}}
        backgroundStyle={styles.modalbackground}
        handleStyle={styles.handle}
        snapPoints={snapPoints}>
        <Ptsd close={modalclose} />
        {/* <BtnScreen close={modalclose} /> */}
      </BottomSheetModal>
      <ModalButton handlePresentModalPress={handlePresentModalPress} />
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  modalbackground: {
    // marginTop: 5 * height,
    // borderTopRightRadius: 24 * width,
    // borderTopLeftRadius: 24 * width,
    // elevation: 24,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1 * width,
    //   height: 12 * height,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // evevation: 24,
  },
  handle: {
    backgroundColor: '#F6F6F9',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopColor: 'rgba(163, 158, 158, 0.4)',
    borderTopWidth: 10 * scale,
  },
});
export default Formbtn;
