import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import StyledText from '../../components/globalcomponents/StyledText';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import Btn from '../../components/globalcomponents/Btn';
import {BtnParamList} from '../../../config/Type';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import SheetHandle from '../../components/globalcomponents/SheetHandle';
import BooksearchModal from '../../components/reservation/BooksearchModal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/RootReducer';
import axios from 'axios';
import {SERVER_URL} from '@env';
import {AlertModal} from '../../components/Modal/AlertModal';
import {AppDispatch} from '../../store/store';
import {asyncStatusFetch} from '../../store/slice/StatusSlice';
const certificationlist = [
  '동서양의 문학',
  '서양의 역사와 사상',
  '동양의 역사와 사상',
  '과학 사상',
];
const ReservationDetail = (props: BtnParamList['ReservationDetail']) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const bookdata = useSelector((state: RootState) => state.Books.data);
  const user = useSelector((state: RootState) => state.User);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visible1, setVisible1] = React.useState<boolean>(false);
  const closemodal = () => {
    setVisible(false);
    dispatch(asyncStatusFetch());
    dismiss();
  };
  const closemodal1 = () => {
    setVisible1(false);
  };

  const [description, setDescription] = React.useState<string>('');
  const [selected, setSelected] = React.useState('분야를 선택해주세요.');
  const [selectedBook, setSelectedBook] =
    React.useState('도서를 선택해 주세요.');

  const [booklist, setBooklist] = React.useState<string[]>([]);

  const back = () => {
    navigation.goBack();
  };
  const {dismiss} = useBottomSheetModal();

  const submit = async (selected: string, book_name: string) => {
    if (selected === '분야를 선택해주세요.') {
      setDescription('분야를 선택해주세요.');
      setVisible1(true);
      return;
    }
    if (book_name === '도서를 선택해 주세요.') {
      setDescription('도서를 선택해주세요.');
      setVisible1(true);
      return;
    }
    if (parseInt(user.grade) > 3) {
      setDescription('인증 가능한 학기가 아닙니다.');
      setVisible(true);
      return;
    }
    const res = await axios
      .post(`${SERVER_URL}user/reserve`, {
        id: user.id,
        password: user.password,
        shInfold: props.route.params.id,
        book_name: book_name,
        classification: selected,
      })
      .then(res => {
        setDescription('예약이 완료되었습니다.');
        setVisible(true);
      })
      .catch(err => {
        setDescription('예약은 주 1회 가능합니다.');
        setVisible(true);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Btn onPress={back} Icon="chevron-back" />,
      headerRight: () => (
        <Btn
          onPress={() => {
            submit(selected, selectedBook);
          }}
          title="신청하기"
        />
      ),
    });
  }, [selected, selectedBook]);
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

  const filter = (str: string) => {
    let newbooklist: string[] = [];
    bookdata.map(book => {
      if (book.category.category === str) {
        newbooklist.push(book.title);
      }
    });
    setBooklist(newbooklist);
    console.log(newbooklist);
  };

  const selectcategory = (str: string) => {
    setSelected(str);
    filter(str);
    setSelectedBook('도서를 선택해 주세요.');
    modalclose();
  };
  const selectbook = (str: string) => {
    setSelectedBook(str);
    modalclose2();
  };
  console.log(selectedBook);
  return (
    <>
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
      <AlertModal
        visible={visible}
        description={description}
        accpetText="확인"
        onConfirm={closemodal}
        onClose={closemodal}
      />
      <AlertModal
        visible={visible1}
        description={description}
        accpetText="확인"
        onConfirm={closemodal1}
        onClose={closemodal1}
      />
    </>
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
