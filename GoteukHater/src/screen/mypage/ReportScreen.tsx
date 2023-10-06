import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StyledText from '../../components/globalcomponents/StyledText';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Btn from '../../components/globalcomponents/Btn';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';

export const ReportScreen = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const [text, onChangeText] = useState<string>('');
  const naviagtion = useNavigation();

  const {dismiss} = useBottomSheetModal();
  useEffect(() => {
    naviagtion.setOptions({
      headerRight: () => (
        <Btn
          title="제출하기"
          onPress={() => {
            dismiss();
          }}
        />
      ),
    });
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View>
          <StyledText style={[styles.title, {marginTop: 0 * height}]}>
            날짜
          </StyledText>
          <View style={styles.inputbox}>
            <StyledText style={globalstyles.p1}>
              {year}년 {month + 1}월 {day}일
            </StyledText>
          </View>
        </View>
        <View>
          <StyledText style={[styles.title, {marginTop: 0 * height}]}>
            신고내용
          </StyledText>

          <TextInput
            multiline={true}
            style={[styles.inputbox2, globalstyles.p1]}
            placeholder="버그에 대한 내용이나 앱을 사용하며 불편한 점을 자유롭게 작성해 주세요."
            onChangeText={onChangeText}
            value={text}
            textAlignVertical="top"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    paddingTop: 16 * height,
    rowGap: 20 * height,
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
  inputbox2: {
    backgroundColor: 'white',
    height: 400 * height,
    paddingTop: 12 * scale,
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
});
