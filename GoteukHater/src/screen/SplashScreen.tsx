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

const SplashScreen = () => {
  const navigation = useNavigation();
  const fetchuser = async () => {
    const id = await AsyncStorage.getItem('id');
    const password = await AsyncStorage.getItem('password');
    if (id == null || password == null) {
      navigation.navigate('Login' as never);
      return;
    }
    try {
      const res = await axios.post(`${SERVER_URL}user/user_info`, {
        id: id,
        password: password,
      });
      navigation.navigate('NestPage' as never);
    } catch (e) {
      Alert.alert('회원 정보가 변경되었습니다.\n다시 로그인 해주세요.');
      AsyncStorage.removeItem('id');
      AsyncStorage.removeItem('password');
      navigation.navigate('Login' as never);
    }
  };

  useEffect(() => {
    fetchuser();
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
