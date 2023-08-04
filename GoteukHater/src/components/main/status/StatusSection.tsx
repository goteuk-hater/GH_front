import {NavigationProp, NavigationState} from '@react-navigation/native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, height, width} from '../../../../config/globalStyles';
import ApplicationStatus from './ApplicationStatus';
import CertificationView from '../certification/CertificationView';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import CertificationCard from '../certification/CertificationCard';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
const StatusSection = ({navigation}: Props) => {
  return (
    <FlexView gapVertical={12 * height}>
      <View style={styles.titlebox}>
        <StyledText style={globalstyles.h1}>나의 신청현황</StyledText>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('BookingListScreen' as never)}>
          <StyledText style={globalstyles.p1}>전체보기</StyledText>
        </TouchableOpacity>
      </View>
      <ApplicationStatus />
    </FlexView>
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
