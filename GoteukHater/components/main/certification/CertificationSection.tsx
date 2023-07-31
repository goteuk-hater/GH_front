import {globalstyles, height} from '../../../config/globalStyles';
import CertificationView from './CertificationView';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';

const CertificationSection = () => {
  return (
    <FlexView gapVertical={12 * height}>
      <StyledText style={globalstyles.h1}>나의 인증현황</StyledText>
      <CertificationView />
    </FlexView>
  );
};

export default CertificationSection;
