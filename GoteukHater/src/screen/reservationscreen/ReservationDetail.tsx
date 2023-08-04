import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {height, scale, width} from '../../../config/globalStyles';
import {onClose, onOpen, Picker} from 'react-native-actions-sheet-picker';
import StyledText from '../../components/globalcomponents/StyledText';
import {BottomSheetModalStackBehavior} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModal';
import {BottomSheetDefaultHandleProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetHandle/types';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import FlexView from '../../components/globalcomponents/FlexView';
import Btn from '../../components/globalcomponents/Btn';

interface Props {
  route: any;
  navigation: NavigationProp<NavigationState>;
}
const ReservationDetail = ({route, navigation}: Props) => {
  const bookdata = {
    0: [{name: '분야를 선택해주세요.', key: 0}],
    1: [
      {name: '플라톤의 국가', key: 1},
      {name: '정치학', key: 2},
      {name: '키케로의 의무론', key: 3},
    ],
    2: [
      {name: '성학십도', key: 1},
      {name: '북학의', key: 2},
      {name: '조선상고사', key: 3},
    ],
    3: [
      {name: '젊은 예술가의 초상', key: 1},
      {name: '구토', key: 2},
      {name: '실락원', key: 3},
      {name: '젊은 예술가의 초상', key: 4},
      {name: '구토', key: 5},
      {name: '실락원', key: 6},
      {name: '젊은 예술가의 초상', key: 7},
      {name: '구토', key: 8},
      {name: '실락원', key: 9},
      {name: '젊은 예술가의 초상', key: 10},
      {name: '구토', key: 11},
      {name: '실락원', key: 12},
      {name: '젊은 예술가의 초상', key: 13},
      {name: '구토', key: 14},
      {name: '실락원', key: 15},
    ],
    4: [
      {name: '통섭', key: 1},
      {name: '종의 기원', key: 2},
      {name: '부분과 전체', key: 3},
    ],
  };

  const [certification, setCertification] = React.useState([
    {name: '서양의 역사와 사상', key: 1},
    {name: '동양의 역사와 사상', key: 2},
    {name: '동서양의 문학', key: 3},
    {name: '과학사', key: 4},
  ]);
  const [selected, setSelected] = React.useState({
    name: '분야를 선택해주세요.',
    key: 0,
  });
  const [selectedBook, setSelectedBook] = React.useState({
    name: '책을 선택해주세요.',
    key: 0,
  });
  const [booklist, setBooklist] = React.useState(bookdata[0]);
  const choosecertification = data => {
    setSelected(data);
    setSelectedBook({
      name: '책을 선택해주세요.',
      key: 0,
    });
    setBooklist(bookdata[data.key]);
  };
  const [query, setQuery] = React.useState('');
  const filteredData = useMemo(() => {
    if (booklist && booklist.length > 0) {
      return booklist.filter(item => item.name.includes(query));
    }
  }, [booklist, query]);
  const onSearch = text => {
    setQuery(text);
  };

  const back = () => {
    navigation.navigate('ReservationHome' as never);
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Btn onPress={back} Icon="chevron-back" />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <StyledText style={[styles.title, {marginTop: 0 * height}]}>
        날짜
      </StyledText>
      <View style={styles.inputbox}>
        <StyledText style={styles.input}>2023년 02월 28일</StyledText>
      </View>
      <StyledText style={styles.title}>시간</StyledText>
      <View style={styles.inputbox}>
        <StyledText style={styles.input}>11:00 ~ 11:30</StyledText>
      </View>

      <StyledText style={styles.title}>분야</StyledText>
      <TouchableOpacity
        style={styles.inputbox}
        onPress={() => onOpen('certification')}>
        <StyledText style={styles.input}>{selected.name}</StyledText>
      </TouchableOpacity>
      <Picker
        id="certification"
        data={certification}
        setSelected={data => choosecertification(data)}
        label="분야"
      />
      <StyledText style={styles.title}>도서명</StyledText>
      <TouchableOpacity style={styles.inputbox} onPress={() => onOpen('book')}>
        <StyledText style={styles.input}>{selectedBook.name}</StyledText>
      </TouchableOpacity>
      <Picker
        id="book"
        data={filteredData}
        setSelected={setSelectedBook}
        label="도서선택"
        onSearch={onSearch}
        searchable={true}
        inputValue={query}
        noDataFoundText={'책 제목을 확인해 주세요.'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 12 * scale,
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
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
