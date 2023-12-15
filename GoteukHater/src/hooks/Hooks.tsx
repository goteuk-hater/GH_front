import AsyncStorage from '@react-native-async-storage/async-storage';

export const Fetchuser = async () => {
  const id = await AsyncStorage.getItem('id');
  const password = await AsyncStorage.getItem('password');
  return {id, password};
};
