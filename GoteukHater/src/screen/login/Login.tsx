import {TouchableOpacity} from '@gorhom/bottom-sheet';
import React, {useCallback} from 'react';
import {View, StyleSheet, Alert, Linking} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import StyledText from '@/components/global/StyledText';
import {getUserInfo, postLogin} from '@/service/api';
import {setUserToStorage} from '@/utils/asyncStorage';
import {setUser, setUserInfo} from '@/store/slice/UserSlice';
const URL =
  'https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp?rtUrl=portal.sejong.ac.kr/comm/member/user/ssoLoginProc.do';
const Login = () => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const login = async () => {
    if (id === '' || password === '') {
      Alert.alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    if (id.length !== 8) {
      Alert.alert('아이디는 8자리입니다.');
      return;
    }
    try {
      const user = await postLogin({id, password});
      if (user) {
        dispatch(
          setUser({
            id: user.id,
            password: user.password,
          }),
        );
        setUserToStorage(user.id, user.password);
        const userInfo = await getUserInfo(user);
        dispatch(setUserInfo(userInfo));
        dispatch(setUser(user));
        setId('');
        setPassword('');
        navigation.navigate('HomePage' as never);
      }
    } catch (e) {
      Alert.alert('아이디 비밀번호를 확인해주세요.');
    }
  };
  const openUrl = useCallback(async () => {
    await Linking.openURL(URL);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={{rowGap: 4 * height}}>
          <StyledText style={[globalStyle.h1, {fontSize: 28 * scale}]}>
            고특싫어
          </StyledText>
          <StyledText style={styles.infoText}>
            세종대학교 포털 아이디로 로그인해주세요!
          </StyledText>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input]}
            onChangeText={text => {
              setId(text);
            }}
            value={id}
            placeholder="학번을 입력해주세요."
            placeholderTextColor={'#D9D9D9'}
            keyboardType="numeric"
            maxLength={8}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => {
              setPassword(text);
            }}
            value={password}
            placeholder="패스워드를 입력하세요."
            placeholderTextColor={'#D9D9D9'}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.infoBox}>
          <TouchableOpacity onPress={login} style={styles.btn}>
            <StyledText style={[globalStyle.h1, {color: 'white'}]}>
              로그인
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity onPress={openUrl}>
            <StyledText
              style={[
                styles.infoText,
                {
                  textDecorationLine: 'underline',
                },
              ]}>
              아이디나 비밀번호를 잊으셨나요?
            </StyledText>
          </TouchableOpacity>
        </View>
      </View>
      <StyledText
        style={[
          styles.infoText,
          {marginBottom: 48 * height, textAlign: 'center'},
        ]}>
        "고특싫어"는 사용자의 비밀번호를 서버에 저장하지 않습니다.
      </StyledText>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  loginWrapper: {
    padding: 16 * scale,
    paddingTop: 48,
    rowGap: 32 * height,
  },
  inputbox: {
    backgroundColor: 'white',
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    padding: 0,
  },
  inputWrapper: {
    rowGap: 12 * height,
    marginBottom: 16 * height,
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
    backgroundColor: 'rgba(195, 14, 46,1)',
    borderRadius: 10 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 12 * height,
  },
  infoText: {
    ...globalStyle.p2,
    color: '#979799',
  },
});

export default Login;
