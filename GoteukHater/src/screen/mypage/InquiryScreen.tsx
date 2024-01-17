import {BackHandler, StyleSheet, View} from 'react-native';
import StyledText from '@/components/global/StyledText';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import Btn from '../../components/global/Btn';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {SwitchTab} from '../../components/inquiry/SwitchTab';
import {height, scale, width} from '@/config/globalStyle';
import {QAlist} from '../../components/inquiry/QAlist';
import {Inquiry} from '../../components/inquiry/inquiry';

export const InquiryScreen = () => {
  const naviagtion = useNavigation();
  const {dismiss} = useBottomSheetModal();
  const screen = useSelector((state: RootState) => state.Tab.screen);
  useEffect(() => {
    if (screen === 'question') {
      naviagtion.setOptions({
        headerRight: () => null,
      });
    }
  }, [screen]);

  useEffect(() => {
    const backAction = () => {
      dismiss();
      return true;
    };

    // 리스너 등록
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      // 이벤트 리스너 해제
      backHandler.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <SwitchTab screen={screen} />
      {screen === 'question' ? <QAlist /> : <Inquiry />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16 * width,
    paddingVertical: 20 * height,
    rowGap: 20 * height,
    backgroundColor: '#F6F6F9',
  },
});
