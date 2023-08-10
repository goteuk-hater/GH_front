import FlexView from '../../globalcomponents/FlexView';
import LinkCard from './LinkCard';
import {NavigationProp, NavigationState} from '@react-navigation/native';

import StyledText from '../../globalcomponents/StyledText';
import {globalstyles, height} from '../../../../config/globalStyles';
import {View} from 'react-native';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
const LinkSection = ({navigation}: Props) => {
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>바로 가기</StyledText>
      <View style={{rowGap: 4 * height}}>
        <LinkCard
          title={'고전도서 정보 게시판'}
          text={'고전도서시험에는 어떤 책들이 있는지! 후기는 어떤지!'}
          navigation={navigation}
          link={'BookSearchScreen'}
        />
      </View>
    </View>
  );
};

export default LinkSection;
