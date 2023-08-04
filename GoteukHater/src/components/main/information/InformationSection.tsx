import {globalstyles, height} from '../../../../config/globalStyles';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import InformationCard from './InformationCard';

const InformationSection = () => {
  return (
    <FlexView gapVertical={12 * height}>
      <StyledText style={globalstyles.h1}>내 정보</StyledText>
      <InformationCard
        name={'김민수'}
        grade={4}
        major={'컴퓨터공학과'}
        studentNumber={18011485}
      />
    </FlexView>
  );
};
export default InformationSection;
