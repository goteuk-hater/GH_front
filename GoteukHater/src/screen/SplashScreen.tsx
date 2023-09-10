import {SERVER_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/RootReducer';
import {Fetchuser} from '../hooks/Hooks';
import {setUser, setUserInfo} from '../store/slice/UserSlice';
import {asyncStatusFetch, setStatus} from '../store/slice/StatusSlice';
import {asyncBooksFetch} from '../store/slice/BooksSlice';
import {AppDispatch} from '../store/store';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const checkuser = async () => {
    const user = await Fetchuser();

    if (user.id == null || user.password == null) {
      navigation.navigate('Login' as never);
      return;
    }

    const res = await axios
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

  const fetchdata = async () => {
    checkuser();
    dispatch(asyncBooksFetch());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login' as never)}
      />
      <Button
        title="NestPage"
        onPress={() => navigation.navigate('NestPage' as never)}
      />
    </View>
  );
};
export default SplashScreen;
