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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ModalButtonProps {
  handlePresentModalPress: () => void;
}
const ModalButton = (props: ModalButtonProps) => {
  return (
    <View style={styles.absolute}>
      <TouchableOpacity onPress={props.handlePresentModalPress}>
        <Card row={styles.card}>
          <View style={styles.box}>
            <Ionicons name="calendar-outline" size={20 * scale} color="black" />
          </View>
          <View style={styles.box}>
            <StyledText
              style={[
                globalstyles.h3,
                {
                  lineHeight: 22 * height,
                },
              ]}>
              시험 예약하기
            </StyledText>
          </View>
          <View style={styles.box}>
            <Ionicons
              name="caret-forward-outline"
              size={20 * scale}
              color="black"
            />
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
  box: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4 * width,
  },
});

export default ModalButton;
