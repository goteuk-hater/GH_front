import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Alert, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import {getUserInfo} from '../service/api';
import {setUser, setUserInfo} from '../store/slice/UserSlice';
import StyledText from '@/components/global/StyledText';
import logoUrl from '@/assets/images/logo.png';
import {getUserToStorage} from '@/utils/asyncStorage';
const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUserToStorage();
      if (!user) {
        navigation.navigate('Login' as never);
        return;
      }
      const userInfo = await getUserInfo(user);
      if (!userInfo) {
        Alert.alert('회원 정보가 변경되었습니다.\n다시 로그인 해주세요.');
        navigation.navigate('Login' as never);
        return;
      }
      dispatch(setUserInfo(userInfo));
      dispatch(setUser(user));
      navigation.navigate('HomePage' as never);
    };
    fetchUserInfo();
  }, [dispatch, navigation]);
  return (
    <View style={styles.container}>
      <Image source={logoUrl} style={styles.logo} />
      <StyledText style={styles.title}>고특싫어</StyledText>
      <StyledText style={styles.infoText}>
        세종대학교 고전독서 예약 시스템
      </StyledText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50 * width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150 * width,
    height: 150 * height,
  },
  title: {
    ...globalStyle.h1,
    fontSize: 28 * scale,
  },
  infoText: {
    ...globalStyle.p2,
    color: '#979799',
    textAlign: 'center',
  },
});
export default SplashScreen;
