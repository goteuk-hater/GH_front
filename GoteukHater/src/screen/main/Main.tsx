import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import InformationSection from '../../components/main/information/InformationSection';
import StatusSection from '../../components/main/status/StatusSection';
import CertificationSection from '../../components/main/certification/CertificationSection';
import LinkSection from '../../components/main/Link/LinkSection';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_URL} from '@env';
import axios from 'axios';
import {Student} from '../../../config/Type';

interface Props {
  navigation: NavigationProp<NavigationState>;
}

// const studentData: Student = {
//   grade: string,
//   major: '컴퓨터공학과',
//   name: '김민수',
//   read_certification: {
//     '과학 사상(1권)': '1 권',
//     '동·서양의 문학(3권)': '4 권',
//     '동양의역사와사상(2권)': '2 권',
//     '서양의역사와사상(4권)': '4 권',
//   },
//   status: '재학',
// };

const Main = ({navigation}: Props) => {
  const [myData, setMyData] = useState<Student>({
    grade: '',
    major: '',
    name: '',
    read_certification: {},
    status: '',
  });
  const fetchuser = async () => {
    const id = await AsyncStorage.getItem('id');
    const password = await AsyncStorage.getItem('password');
    try {
      const res = await axios.post(`${SERVER_URL}user/user_info`, {
        id: id,
        password: password,
      });
      setMyData(res.data);
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
    <SafeAreaView style={styles.container}>
      <View style={[styles.content, {rowGap: 20 * height}]}>
        <InformationSection user={myData} />
        <StatusSection navigation={navigation} />
        <CertificationSection />
        <LinkSection navigation={navigation} />
        <Button
          title="Logout"
          onPress={() => {
            AsyncStorage.removeItem('id');
            AsyncStorage.removeItem('password');
            navigation.navigate('Login' as never);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16 * width,
    paddingTop: 8 * height,
    marginBottom: 100 * height,
  },
});
export default Main;
