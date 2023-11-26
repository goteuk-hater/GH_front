import {TouchableOpacity} from '@gorhom/bottom-sheet';
import React, {useEffect, type PropsWithChildren, useCallback} from 'react';
import {View, Text, StyleSheet, Alert, Linking} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/globalcomponents/Card';
import FlexView from '../../components/globalcomponents/FlexView';
import StyledText from '../../components/globalcomponents/StyledText';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {SERVER_URL} from '@env';
import {Link, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser, setUserInfo} from '../../store/slice/UserSlice';

const Login = () => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Loginfunction = async () => {
    if (id === '' || password === '') {
      Alert.alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    if (id.length !== 8) {
      Alert.alert('아이디는 8자리입니다.');
      return;
    }
    try {
      const res = await axios.post(`${SERVER_URL}user/login`, {
        id: id,
        password: password,
      });
      if (res.status === 200) {
        if (res.data === 'false') {
          Alert.alert('로그인 실패');
        } else {
          setPhone(id, res.data.password);
          dispatch(
            setUser({
              id: res.data.id,
              password: res.data.password,
            }),
          );
          dispatch(setUserInfo(res.data.conf_data));
          navigation.navigate('NestPage' as never);
        }
      }
    } catch (e) {
      Alert.alert('아이디 비밀번호를 확인해주세요.');
    }
  };

  const setPhone = async (id: string, password: string) => {
    try {
      await AsyncStorage.setItem('id', id);
      await AsyncStorage.setItem('password', password);
    } catch (e) {
      console.log(e);
    }
  };

  const url =
    'https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp?rtUrl=portal.sejong.ac.kr/comm/member/user/ssoLoginProc.do';
  const openUrl = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  useEffect(() => {
    setId('');
    setPassword('');
  }, []);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          padding: 16 * scale,
          paddingTop: 48,
          rowGap: 32 * height,
        }}>
        <View style={{rowGap: 4 * height}}>
          <StyledText style={[globalstyles.h1, {fontSize: 28 * scale}]}>
            고특싫어
          </StyledText>
          <StyledText style={[styles.infotext, {textAlign: 'left'}]}>
            세종대학교 포털 아이디로 로그인해주세요!
          </StyledText>
        </View>
        <View style={{rowGap: 12 * height, marginBottom: 16 * height}}>
          <TextInput
            style={[styles.input]}
            onChangeText={setId}
            value={id}
            placeholder="학번을 입력해주세요."
            placeholderTextColor={'#D9D9D9'}
            keyboardType="numeric"
            maxLength={8}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="패스워드를 입력하세요."
            placeholderTextColor={'#D9D9D9'}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.infobox}>
          <TouchableOpacity onPress={Loginfunction} style={styles.btn}>
            <StyledText style={[globalstyles.h1, {color: 'white'}]}>
              로그인
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity onPress={openUrl}>
            <StyledText
              style={[
                styles.infotext,
                {
                  textDecorationLine: 'underline',
                },
              ]}>
              아이디나 비밀번호를 잊으셨나요?
            </StyledText>
          </TouchableOpacity>
        </View>
      </View>
      <StyledText style={[styles.infotext, {marginBottom: 48 * height}]}>
        "고특싫어"는 사용자의 비밀번호를 서버에 저장하지 않습니다.
      </StyledText>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: 'white',
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    padding: 0,
  },
  input: {
    width: '100%',
    height: 56 * height,
    paddingVertical: 12 * scale,
    paddingHorizontal: 16 * scale,
    color: '#000000',
    backgroundColor: 'white',
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
  },
  btn: {
    width: 343 * width,
    paddingVertical: 12 * scale,
    paddingHorizontal: 20 * scale,
    backgroundColor: 'rgba(195, 14, 46, 1)',
    borderRadius: 10 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infobox: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 12 * height,
  },
  infotext: {
    ...globalstyles.p2,
    color: '#979799',
    textAlign: 'center',
  },
});

export default Login;
