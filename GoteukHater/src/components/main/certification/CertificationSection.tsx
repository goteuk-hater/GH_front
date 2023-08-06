import {globalstyles, height} from '../../../../config/globalStyles';
import CertificationView from './CertificationView';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import {View} from 'react-native';

const CertificationSection = () => {
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>나의 인증현황</StyledText>
      <CertificationView />
    </View>
  );
};

export default CertificationSection;
