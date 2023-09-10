import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {globalstyles, height} from '../../../../config/globalStyles';
import {Student} from '../../../../config/Type';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import InformationCard from './InformationCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/RootReducer';

const InformationSection = () => {
  return (
    <View style={{rowGap: 12 * height}}>
      <StyledText style={globalstyles.h1}>내 정보</StyledText>
      <InformationCard />
    </View>
  );
};
export default InformationSection;
