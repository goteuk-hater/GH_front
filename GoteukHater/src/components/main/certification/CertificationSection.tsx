import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../../config/globalStyles';
import CertificationView from './CertificationView';

import StyledText from '../../globalcomponents/StyledText';
import {StyleSheet, View} from 'react-native';

import {RootState} from '../../../store/store';
import {useSelector} from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CertificationSection = () => {
  const user = useSelector((state: RootState) => state.User);
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>나의 인증현황</StyledText>
      {user.loading ? (
        <SkeletonPlaceholder speed={1500}>
          <View style={{rowGap: 4 * height}}>
            <View style={[styles.row, {columnGap: 8 * width}]}>
              <SkeletonPlaceholder.Item
                width={175 * width}
                height={88 * height}
                borderRadius={15 * scale}
              />
              <SkeletonPlaceholder.Item
                width={175 * width}
                height={88 * height}
                borderRadius={15 * scale}
              />
            </View>
            <View style={[styles.row, {columnGap: 8 * width}]}>
              <SkeletonPlaceholder.Item
                width={175 * width}
                height={88 * height}
                borderRadius={15 * scale}
              />
              <SkeletonPlaceholder.Item
                width={175 * width}
                height={88 * height}
                borderRadius={15 * scale}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <CertificationView />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CertificationSection;
