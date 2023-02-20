import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Shadow} from 'react-native-shadow-2';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {height, scale, width} from '../../config/globalStyles';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BtnScreen from '../../screen/reservationscreen/BtnScreen';
import StyledText from './StyledText';

interface FormbtnProps {
  title: string;
  icon: string;
  // calendar, pencil
}

const Formbtn: React.FC<FormbtnProps> = props => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => [790 * height], []);
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
        enableContentPanningGesture={false}
        handleIndicatorStyle={{backgroundColor: 'rgba(60, 60, 67, 0.3)'}}
        backgroundStyle={{
          marginTop: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          elevation: 24,
        }}
        handleStyle={{
          marginTop: 5,
          backgroundColor: '#F6F6F9',
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
        }}
        snapPoints={snapPoints}>
        <BtnScreen close={modalclose} routename={'ReservationHome'} />
      </BottomSheetModal>
      <View style={styles.absolute}>
        <Shadow
          offset={[0, 2]}
          style={styles.reservationbtn}
          distance={1}
          startColor="rgba(172, 180, 162, 0.25)">
          <TouchableOpacity
            style={styles.row}
            onPress={handlePresentModalPress}>
            <Evillcons
              name={props.icon}
              size={28}
              color="black"
              style={{marginRight: 8 * width}}
            />
            <StyledText
              style={{
                color: 'black',
                fontSize: 16 * scale,
                fontWeight: '700',
              }}>
              {props.title}
            </StyledText>
            <FontAwesome
              name="chevron-right"
              size={12}
              color="black"
              style={{marginLeft: 8}}
            />
          </TouchableOpacity>
        </Shadow>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reservationbtn: {
    width: 168 * width,
    height: 44 * height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15 * scale,
    borderColor: '#F6F6F9',
    borderWidth: 1 * width,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
  },
});
export default Formbtn;
