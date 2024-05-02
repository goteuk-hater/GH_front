import {SERVER_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface User {
  id: string;
  password: string;
}
export const getUserInfo = async (user: User) => {
  const userInfo = await axios
    .post(`${SERVER_URL}user/user_info`, {
      id: user.id,
      password: user.password,
    })
    .then(res => {
      return res.data;
    })
    .catch(() => {
      AsyncStorage.clear();
      return false;
    });
  return userInfo;
};
export const postLogin = async (user: User) => {
  const res = await axios.post(`${SERVER_URL}user/login`, {
    id: user.id,
    password: user.password,
  });
  if (res.status === 200) {
    if (res.data === 'false') {
      return false;
    }
    return res.data;
  }
  return false;
};
export const getCalendarData = async (user: User) => {
  const res = await axios.post(`${SERVER_URL}user/calender`, {
    id: user.id,
    password: user.password,
  });
  return res;
};
export const postCancel = async (user: User, reserveId: string) => {
  try {
    const res = await axios.post(`${SERVER_URL}user/cancle`, {
      id: user.id,
      password: user.password,
      reserve_id: reserveId,
    });
    return '예약이 취소되었습니다.';
  } catch (e) {
    return e.response.data;
  }
};
