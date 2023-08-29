import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {StyleSheet, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import {onOpen, Picker} from 'react-native-actions-sheet-picker';
import StyledText from '../../components/globalcomponents/StyledText';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import Btn from '../../components/globalcomponents/Btn';
import {BtnParamList} from '../../../config/Type';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import SheetHandle from '../../components/globalcomponents/SheetHandle';
import TagModal from '../../components/booksearch/TagModal';
import BooksearchModal from '../../components/reservation/BooksearchModal';

const ReservationDetail = (props: BtnParamList['ReservationDetail']) => {
  const navigation = useNavigation();
  const bookdata = {
    '분야를 선택해주세요.': ['도서를 선택해주세요.'],
    '동서양의 문학': ['플라톤의 국가', '정치학', '키케로의 의무론'],
    '서양의 역사와 사상': ['성학십도', '북학의', '조선상고사'],
    '동양의 역사와 사상': [
      '젊은 예술가의 초상',
      '구토',
      '실락원',
      '젊은 예술가의 초상',
      '구토',
      '실락원',
      '젊은 예술가의 초상',
      '실락원',
      '젊은 예술가의 초상',
      '구토',
      '실락원',
      '실락원',
    ],
    과학사: ['통섭', '종의 기원', '부분과 전체'],
  };

  const certificationlist = [
    '동서양의 문학',
    '서양의 역사와 사상',
    '동양의 역사와 사상',
    '과학사',
  ];
  const [selected, setSelected] = React.useState('분야를 선택해주세요.');
  const [selectedBook, setSelectedBook] =
    React.useState('도서를 선택해 주세요.');
  const [booklist, setBooklist] = React.useState<string[]>(
    bookdata['분야를 선택해주세요.'],
  );
  const back = () => {
    navigation.goBack();
  };
  const {dismiss} = useBottomSheetModal();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Btn onPress={back} Icon="chevron-back" />,
      headerRight: () => <Btn onPress={dismiss} title="신청하기" />,
    });
  }, []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => [350 * height], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef2.current?.close();
    bottomSheetModalRef.current?.present();
  }, []);
  const modalclose = () => {
    bottomSheetModalRef.current?.close();
  };
  const handlepresentModalPress2 = useCallback(() => {
    bottomSheetModalRef.current?.close();
    bottomSheetModalRef2.current?.present();
  }, []);
  const modalclose2 = () => {
    bottomSheetModalRef2.current?.close();
  };
  const selectcategory = (str: string) => {
    setSelected(str);
    setBooklist(bookdata[str]);
    setSelectedBook('도서를 선택해 주세요.');
    modalclose();
  };
  const selectbook = (str: string) => {
    setSelectedBook(str);
    modalclose2();
  };
  return (
    <View style={styles.container}>
      <StyledText style={[styles.title, {marginTop: 0 * height}]}>
        날짜
      </StyledText>
      <View style={styles.inputbox}>
        <StyledText style={globalstyles.p1}>
          {props.route.params.date}
        </StyledText>
      </View>
      <StyledText style={styles.title}>시간</StyledText>
      <View style={styles.inputbox}>
        <StyledText style={globalstyles.p1}>
          {props.route.params.time}
        </StyledText>
      </View>

      <StyledText style={styles.title}>분야</StyledText>
      <TouchableOpacity
        style={styles.inputbox}
        onPress={handlePresentModalPress}>
        <StyledText
          style={[
            globalstyles.p1,
            {
              color: selected === '분야를 선택해주세요.' ? 'gray' : 'black',
            },
          ]}>
          {selected}
        </StyledText>
      </TouchableOpacity>

      <StyledText style={styles.title}>도서명</StyledText>
      <TouchableOpacity
        style={styles.inputbox}
        onPress={handlepresentModalPress2}>
        <StyledText
          style={[
            globalstyles.p1,
            {
              color:
                selectedBook === '도서를 선택해 주세요.' ? 'gray' : 'black',
            },
          ]}>
          {selectedBook}
        </StyledText>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        stackBehavior="push"
        handleComponent={SheetHandle}>
        <BooksearchModal
          closeModal={modalclose}
          setState={selectcategory}
          list={certificationlist}
          title="분야"
          selected={selected}
        />
      </BottomSheetModal>
      <BottomSheetModal
        ref={bottomSheetModalRef2}
        index={0}
        snapPoints={snapPoints}
        stackBehavior="push"
        handleComponent={SheetHandle}>
        <BooksearchModal
          closeModal={modalclose2}
          setState={selectbook}
          list={booklist}
          title="도서명"
          selected={selectedBook}
        />
      </BottomSheetModal>
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
