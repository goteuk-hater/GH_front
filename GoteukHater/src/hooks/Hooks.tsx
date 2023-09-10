import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {SERVER_URL} from '@env';
import {setStatus} from '../store/slice/StatusSlice';

export const Fetchuser = async () => {
  const id = await AsyncStorage.getItem('id');
  const password = await AsyncStorage.getItem('password');
  return {id, password};
};
