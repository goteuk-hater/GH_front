import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Button, Alert} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const Restore = async () => {
    try {
      const a = await AsyncStorage.getItem('id');
      const b = await AsyncStorage.getItem('password');
      if (a == null || b == null) {
        navigation.navigate('Login' as never);
      } else {
        navigation.navigate('NestPage' as never);
      }
    } catch (e) {
      Alert.alert('저장된 정보가 없습니다.');
    }
  };
  useEffect(() => {
    // Restore();
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
