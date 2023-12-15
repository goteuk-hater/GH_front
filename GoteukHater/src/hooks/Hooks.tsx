import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUser = async () => {
  const id = await AsyncStorage.getItem('id');
  const password = await AsyncStorage.getItem('password');
  return {id, password};
};
