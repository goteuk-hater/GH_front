import {View} from 'react-native';
import {globalstyles, height} from '../../../../config/globalStyles';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import InformationCard from './InformationCard';

const InformationSection = () => {
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>내 정보</StyledText>
      <InformationCard
        name={'김민수'}
        grade={4}
        major={'컴퓨터공학과'}
        studentNumber={18011485}
      />
    </View>
  );
};
export default InformationSection;
