import {SERVER_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Alert, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../hooks/Hooks';
import {setUser, setUserInfo} from '../store/slice/UserSlice';
import {asyncBooksFetch} from '../store/slice/BooksSlice';
import {AppDispatch} from '../store/store';
import logo from '../../assets/images/logo.png';
import StyledText from '../components/globalcomponents/StyledText';
import {globalstyles, height, scale, width} from '../../config/globalStyles';
const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const checkUser = async () => {
    const user = await fetchUser();

    if (user.id == null || user.password == null) {
      navigation.navigate('Login' as never);
      return;
    }
    await axios
      .post(`${SERVER_URL}user/user_info`, {
        id: user.id,
        password: user.password,
      })
      .then(res => {
        console.log({
          id: user.id,
          password: user.password,
        });
        dispatch(setUser({id: user.id, password: user.password}));
        dispatch(setUserInfo(res.data));
        navigation.navigate('NestPage' as never);
      })
      .catch(e => {
        Alert.alert('회원 정보가 변경되었습니다.\n다시 로그인 해주세요.');
        AsyncStorage.clear();
        navigation.navigate('Login' as never);
      });
  };

  const fetchData = async () => {
    await checkUser();
    dispatch(asyncBooksFetch());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
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
    ...globalstyles.h1,
    fontSize: 28 * scale,
  },
  infoText: {
    ...globalstyles.p2,
    color: '#979799',
    textAlign: 'center',
  },
});
export default SplashScreen;
