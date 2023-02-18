import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {height, scale, width} from '../../config/globalStyles';
interface Props {
  navigation: NavigationProp<NavigationState>;
}
const ReservationDetail = ({navigation}: Props) => {
  const [certification, setCertification] = React.useState('');
  const [book, setBook] = React.useState('');
  const [showbooklist, setshowbooklist] = React.useState([]);
  interface BookData {
    key: string;
    value: string;
  }

  interface CertificationData {
    [key: string]: BookData[];
  }

  const certificationData: BookData[] = [
    {key: '1', value: '서양의 역사와 사상'},
    {key: '2', value: '동양의 역사와 사상'},
    {key: '3', value: '동서양의 문학'},
    {key: '4', value: '과학 사상'},
  ];
  const bookData: CertificationData = {
    '': [],
    '1': [
      {key: '1', value: '플라톤의 국가'},
      {key: '2', value: '정치학'},
      {key: '3', value: '키케로의 의무론'},
      {key: '4', value: '게르마니아'},
      {key: '5', value: '플라톤의 국가'},
      {key: '6', value: '정치학'},
      {key: '7', value: '키케로의 의무론'},
      {key: '8', value: '게르마니아'},
      {key: '9', value: '플라톤의 국가'},
      {key: '10', value: '정치학'},
      {key: '11', value: '키케로의 의무론'},
      {key: '12', value: '게르마니아'},
      {key: '13', value: '플라톤의 국가'},
      {key: '14', value: '정치학'},
      {key: '15', value: '키케로의 의무론'},
      {key: '16', value: '게르마니아'},
    ],
    '2': [
      {key: '1', value: '성합식도'},
      {key: '2', value: '북학의'},
      {key: '3', value: '조선상고사'},
      {key: '4', value: '삼국유사'},
    ],
    '3': [
      {key: '1', value: '젊은 예술가의 초상'},
      {key: '2', value: '구토'},
      {key: '3', value: '실락원'},
      {key: '4', value: '파우스트'},
    ],
    '4': [
      {key: '1', value: '통섭'},
      {key: '2', value: '종의 기원'},
      {key: '3', value: '부분과 전체'},
      {key: '4', value: '과학혁명의 구조'},
    ],
  };
  console.log(certification, book);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {marginTop: 0 * height}]}>날짜</Text>
      <View style={styles.inputbox}>
        <Text style={styles.input}>2023년 02월 28일</Text>
      </View>
      <Text style={styles.title}>시간</Text>
      <View style={styles.inputbox}>
        <Text style={styles.input}>11:00 ~ 11:30</Text>
      </View>

      <Text style={styles.title}>분야</Text>

      <SelectList
        boxStyles={styles.dropdownbox}
        dropdownStyles={styles.dropdown}
        dropdownItemStyles={styles.item}
        dropdownTextStyles={styles.dropdowntext}
        inputStyles={styles.input}
        setSelected={setCertification}
        data={certificationData}
        save="key"
        search={false}
        placeholder={'분야를 선택해주세요.'}
        onSelect={() => {
          setshowbooklist(bookData[certification]);
          setBook('');
        }}
      />

      <Text style={styles.title}>도서명</Text>

      <SelectList
        boxStyles={styles.dropdownbox}
        dropdownStyles={styles.dropdown}
        dropdownItemStyles={styles.item}
        dropdownTextStyles={styles.dropdowntext}
        inputStyles={styles.input}
        setSelected={setBook}
        data={showbooklist}
        save="value"
        search={false}
        placeholder={'도서를 선택해주세요'}
        notFoundText={'분야를 먼저 선택해주세요.'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F6F6F9',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    paddingTop: 16 * height,
  },
  input: {
    color: '#8B8B8B',
    fontSize: 14 * scale,
    fontWeight: '400',
  },
  inputbox: {
    backgroundColor: 'white',
    height: 47 * height,
    padding: 15,
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
  },
  title: {
    fontSize: 16 * scale,
    color: 'black',
    fontWeight: '700',
    marginBottom: 8 * height,
    marginTop: 20 * height,
  },
  dropdownbox: {
    backgroundColor: 'white',
    height: 47 * height,
    padding: 15,
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
  },
  dropdown: {
    borderColor: '#D9D9D9',
    backgroundColor: 'white',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  dropdowntext: {
    color: '#8B8B8B',
    // textAlign: 'center',
  },
});
export default ReservationDetail;
