import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Shadow} from 'react-native-shadow-2';
import {globalstyles, height, scale, width} from '../../config/globalStyles';
import FlexView from '../globalcomponents/FlexView';
import StyledText from '../globalcomponents/StyledText';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

interface ModalButtonProps {
  handlePresentModalPress: () => void;
  bottomSheetModalRef: any;
}
const ModalButton = (props: ModalButtonProps) => {
  return (
    <View style={styles.absolute}>
      <Shadow
        offset={[0, 2]}
        style={styles.reservationbtn}
        distance={1}
        startColor="rgba(172, 180, 162, 0.25)">
        <TouchableOpacity
          onPress={props.handlePresentModalPress}
          style={styles.row}>
          <FlexView style={[styles.row]} gapHorizental={8}>
            <Ionicons name="calendar-outline" size={20} color="black" />
            <StyledText style={globalstyles.h2}>시험 예약하기</StyledText>
          </FlexView>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 35 * height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reservationbtn: {
    paddingLeft: 16 * width,
    paddingRight: 8 * width,
    paddingVertical: 8 * height,
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
  },
});

export default ModalButton;
