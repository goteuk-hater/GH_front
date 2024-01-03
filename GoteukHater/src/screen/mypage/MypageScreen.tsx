import {StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '@/components/global/StyledText';
import InformationCard from '../../components/main/information/InformationCard';
import {globalStyle, height, width} from '@/config/globalStyle';
import Card from '../../components/global/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../config/Type';
import {useDispatch} from 'react-redux';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {setInvisible, setVisible} from '../../store/slice/ModeSlice';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SheetHandle from '../../components/global/SheetHandle';
import {MypageStackScreen} from './MypageStackScreen';

export const MypageScreen = () => {
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.clear();
    //스택초기화
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'} as never],
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInvisible());
  }, []);
  //이 페이지를 뒤로 가기 했을 때 이벤트를 발생하고 싶어
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(setVisible());
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  const snapPoints = useMemo(() => [790 * height], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const [routename, setroutename] = useState<string>('Report');
  return (
    <>
      <View style={styles.container}>
        <InformationCard />
        <View style={styles.btnlist}>
          <TouchableOpacity
            onPress={() => {
              setroutename('Report');
              handlePresentModalPress();
            }}>
            <Card style={{width: '100%'}}>
              <StyledText style={globalStyle.p1}>버그 신고하기</StyledText>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setroutename('Inquiry');
              handlePresentModalPress();
            }}>
            <Card style={{width: '100%'}}>
              <StyledText style={globalStyle.p1}>문의 하기</StyledText>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              logout();
            }}>
            <Card style={{width: '100%'}}>
              <StyledText style={[globalStyle.p1, {color: '#EB5828'}]}>
                로그아웃
              </StyledText>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%'}}>
          <StyledText
            style={[globalStyle.p2, {textAlign: 'center', color: '#979799'}]}>
            기기에 있는 사용자의 데이터는 서버에 저장되지 않으며
          </StyledText>
          <StyledText
            style={[globalStyle.p2, {textAlign: 'center', color: '#979799'}]}>
            로그 아웃시 등록한정보가 모두 초기화됩니다.
          </StyledText>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enablePanDownToClose={true}
        enableContentPanningGesture={true}
        handleIndicatorStyle={{
          backgroundColor: 'rgba(60, 60, 67, 0.3)',
        }}
        style={styles.modalbackground}
        backgroundStyle={styles.modalbackground}
        handleStyle={styles.handle}
        snapPoints={snapPoints}
        handleComponent={SheetHandle}>
        <MypageStackScreen routename={routename} />
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    flex: 1,
    padding: 16 * width,
    rowGap: 24 * height,
  },
  handle: {
    backgroundColor: '#F6F6F9',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  modalbackground: {
    backgroundColor: '#F6F6F9',
  },
  btnlist: {
    rowGap: 4 * height,
    width: '100%',
  },
});
