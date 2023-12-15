import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {globalstyles, height, width} from '../../../../config/globalStyles';
import ApplicationStatus from './ApplicationStatus';
import StyledText from '../../globalcomponents/StyledText';

const StatusSection = () => {
  const navigation = useNavigation();
  return (
    <View style={{rowGap: 12 * height}}>
      <View style={styles.titlebox}>
        <StyledText style={globalstyles.h1}>나의 신청현황</StyledText>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('BookingListScreen' as never)}>
          <StyledText style={globalstyles.p1}>전체보기</StyledText>
        </TouchableOpacity>
      </View>
      <ApplicationStatus />
    </View>
  );
};
const styles = StyleSheet.create({
  titlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    paddingTop: 8 * height,
    paddingLeft: 4 * width,
  },
});

export default StatusSection;
