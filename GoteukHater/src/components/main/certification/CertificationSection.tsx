import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../../config/globalStyles';
import CertificationView from './CertificationView';

import StyledText from '../../globalcomponents/StyledText';
import {View} from 'react-native';

import {RootState} from '../../../store/store';
import {useSelector} from 'react-redux';

const CertificationSection = () => {
  const user = useSelector((state: RootState) => state.User);
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>나의 인증현황</StyledText>
      {user.loading ? (
        <View
          style={{
            width: 358 * width,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32 * scale,
          }}>
          <StyledText style={globalstyles.h3}>로딩중...</StyledText>
        </View>
      ) : (
        <CertificationView />
      )}
    </View>
  );
};

export default CertificationSection;
