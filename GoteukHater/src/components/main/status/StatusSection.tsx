import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {globalStyle, height, width} from '@/config/globalStyle';
import ApplicationStatus from './ApplicationStatus';
import StyledText from '../../global/StyledText';

const StatusSection = () => {
  const navigation = useNavigation();
  return (
    <View style={{rowGap: 12 * height}}>
      <View style={styles.titlebox}>
        <StyledText style={globalStyle.h1}>나의 신청현황</StyledText>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('BookingListScreen' as never)}>
          <StyledText style={globalStyle.p1}>전체보기</StyledText>
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
