import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserToStorage = async () => {
  const id = await AsyncStorage.getItem('id');
  const password = await AsyncStorage.getItem('password');
  if (id == null || password == null) return false;
  return {id, password};
};

export const setUserToStorage = async (id: string, password: string) => {
  try {
    await AsyncStorage.setItem('id', id);
    await AsyncStorage.setItem('password', password);
  } catch (e) {
    return false;
  }
  return true;
};
