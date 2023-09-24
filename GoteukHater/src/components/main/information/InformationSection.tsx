import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity, View} from 'react-native';
import {globalstyles, height} from '../../../../config/globalStyles';

import StyledText from '../../globalcomponents/StyledText';
import InformationCard from './InformationCard';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../store/store';
import {asyncStatusFetch} from '../../../store/slice/StatusSlice';
const InformationSection = () => {
  const usenavigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const reload = () => {
    dispatch(asyncStatusFetch());
  };
  return (
    <View style={{rowGap: 12 * height}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <StyledText style={globalstyles.h1}>내 정보</StyledText>
        <TouchableOpacity
          onPress={() => {
            reload();
          }}>
          <Ionicons name="reload" size={24} style={{alignSelf: 'flex-end'}} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          usenavigation.navigate('MypageScreen' as never);
        }}>
        <InformationCard />
      </TouchableOpacity>
    </View>
  );
};
export default InformationSection;
