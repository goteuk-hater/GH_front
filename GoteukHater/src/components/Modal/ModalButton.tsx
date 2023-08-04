import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Shadow} from 'react-native-shadow-2';
import FlexView from '../globalcomponents/FlexView';
import StyledText from '../globalcomponents/StyledText';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import Card from '../globalcomponents/Card';

interface ModalButtonProps {
  handlePresentModalPress: () => void;
}
const ModalButton = (props: ModalButtonProps) => {
  return (
    <View style={styles.absolute}>
      <TouchableOpacity onPress={props.handlePresentModalPress}>
        <Card style={styles.row}>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={20} color="black" />

            <StyledText style={globalstyles.h3}>시험 예약하기</StyledText>
            <Ionicons name="chevron-forward-outline" size={20} color="black" />
          </View>
        </Card>
      </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ModalButton;
