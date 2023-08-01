import {TouchableOpacity} from '@gorhom/bottom-sheet';
import React, {type PropsWithChildren} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/globalcomponents/Card';
import FlexView from '../../components/globalcomponents/FlexView';
import StyledText from '../../components/globalcomponents/StyledText';
import {globalstyles, height, scale} from '../../config/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const Loginfunction = async () => {
    try {
      await AsyncStorage.setItem('id', id);
      await AsyncStorage.setItem('password', password);
    } catch (e) {
      console.log(e);
    }
  };
  const Restore = async () => {
    try {
      const a = await AsyncStorage.getItem('id');
      const b = await AsyncStorage.getItem('password');
      if (a == null || b == null) {
        Alert.alert('저장된 정보가 없습니다.');
        return;
      }
      Alert.alert(a, b);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlexView
        style={{
          padding: 16 * scale,
          paddingTop: 60 * height,
          alignItems: 'center',
        }}
        gapVertical={40 * height}>
        <FlexView style={{alignItems: 'center'}} gapVertical={12 * height}>
          <StyledText
            style={
              (globalstyles.h1, {fontSize: 40 * scale, fontWeight: '700'})
            }>
            고특싫어
          </StyledText>
          <StyledText style={[globalstyles.h1, {color: '#b2b2b2'}]}>
            학술정보원 아이디로 로그인 하세용
          </StyledText>
        </FlexView>
        <Card style={styles.inputbox}>
          <TextInput
            style={[
              styles.input,
              {borderBottomColor: '#D9D9D9', borderBottomWidth: 1 * scale},
            ]}
            onChangeText={setId}
            value={id}
            placeholder="아이디를 입력하세요."
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
        </Card>

        <TouchableOpacity onPress={Loginfunction}>
          <Card
            style={{
              backgroundColor: '#D9D9D9',
              width: 348 * scale,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <StyledText style={globalstyles.h1}>로그인</StyledText>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={Restore}>
          <Card
            style={{
              backgroundColor: '#D9D9D9',
              width: 348 * scale,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <StyledText style={globalstyles.h1}>저장됐니?</StyledText>
          </Card>
        </TouchableOpacity>
      </FlexView>
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
    width: 348 * scale,
    height: 56 * height,
    padding: 16 * scale,
    color: '#000000',
  },
});

export default Login;
