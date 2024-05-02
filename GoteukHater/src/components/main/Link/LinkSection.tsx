import FlexView from '../../global/FlexView';
import LinkCard from './LinkCard';
import {NavigationProp, NavigationState} from '@react-navigation/native';

import StyledText from '../../global/StyledText';
import {globalStyle, height} from '@/config/globalStyle';
import {View} from 'react-native';

interface Props {
  onPress: () => void;
}
const LinkSection = ({onPress}: Props) => {
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalStyle.h1}>바로 가기</StyledText>
      <View style={{rowGap: 4 * height}}>
        <LinkCard
          title={'고전도서 정보 게시판'}
          text={'고전도서시험에는 어떤 책들이 있는지! 후기는 어떤지!'}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default LinkSection;
