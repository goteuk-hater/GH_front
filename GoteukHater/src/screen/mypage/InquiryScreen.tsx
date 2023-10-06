import {StyleSheet, View} from 'react-native';
import StyledText from '../../components/globalcomponents/StyledText';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import Btn from '../../components/globalcomponents/Btn';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {SwitchTab} from '../../components/inquiry/SwitchTab';
import {height, scale, width} from '../../../config/globalStyles';
import {QAlist} from '../../components/inquiry/QAlist';

export const InquiryScreen = () => {
  const naviagtion = useNavigation();
  const {dismiss} = useBottomSheetModal();
  const screen = useSelector((state: RootState) => state.Tab.screen);
  useEffect(() => {
    if (screen === 'question') {
      naviagtion.setOptions({
        headerRight: () => null,
      });
    } else {
      naviagtion.setOptions({
        headerRight: () => (
          <Btn
            onPress={() => {
              dismiss();
            }}
            title="신청하기"
          />
        ),
      });
    }
  }, [screen]);
  return (
    <View style={styles.container}>
      <SwitchTab screen={screen} />
      {screen === 'question' ? (
        <QAlist />
      ) : (
        <StyledText>1:1 문의하기</StyledText>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16 * width,
    paddingVertical: 20 * height,
    rowGap: 20 * height,
    backgroundColor: 'white',
  },
});
