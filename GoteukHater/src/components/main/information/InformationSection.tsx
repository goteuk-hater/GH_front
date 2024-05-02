import {Alert, TouchableOpacity, View} from 'react-native';
import {globalStyle, height} from '@/config/globalStyle';
import StyledText from '../../global/StyledText';
import InformationCard from './InformationCard';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../store/store';
import {asyncStatusFetch} from '../../../store/slice/StatusSlice';
import {isLoading, setUserInfo} from '../../../store/slice/UserSlice';
import {RootState} from '@/store/RootReducer';
import {getUserInfo} from '@/service/api';

const InformationSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  const reload = async () => {
    dispatch(isLoading());
    dispatch(
      asyncStatusFetch({
        id: user.id,
        password: user.password,
      }),
    );
    const userInfo = await getUserInfo({
      id: user.id,
      password: user.password,
    });
    if (!userInfo) {
      Alert.alert('회원 정보가 변경되었습니다.\n다시 로그인 해주세요.');
      navigation.navigate('Login' as never);
      return;
    }
    dispatch(setUserInfo(userInfo));
    navigation.navigate('HomePage' as never);
  };
  return (
    <View style={{rowGap: 12 * height}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <StyledText style={globalStyle.h1}>내 정보</StyledText>
        <TouchableOpacity
          onPress={() => {
            reload();
          }}>
          <Ionicons name="reload" size={24} style={{alignSelf: 'flex-end'}} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MypageScreen' as never);
        }}>
        <InformationCard />
      </TouchableOpacity>
    </View>
  );
};
export default InformationSection;
