import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {globalstyles, height} from '../../../../config/globalStyles';
import {Student} from '../../../../config/Type';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import InformationCard from './InformationCard';

interface Props {
  user: Student;
}

const InformationSection = (props: Props) => {
  const user = props.user;

  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>내 정보</StyledText>
      <InformationCard user={user} />
    </View>
  );
};
export default InformationSection;
