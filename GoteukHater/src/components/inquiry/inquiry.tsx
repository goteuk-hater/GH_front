import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Btn from '../globalcomponents/Btn';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StyledText from '../globalcomponents/StyledText';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';

export const Inquiry = () => {
  const [text, onChangeText] = useState<string>('');
  const [address, onChangeAddress] = useState<string>('');
  const {dismiss} = useBottomSheetModal();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
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
            연락처
          </StyledText>
          <View style={styles.inputbox}>
            <TextInput
              style={globalstyles.p1}
              placeholder="답변받을 이메일 주소나 휴대전화 번호를 입력해 주세요."
              onChangeText={onChangeAddress}
              value={address}
            />
          </View>
        </View>
        <View>
          <StyledText style={[styles.title, {marginTop: 0 * height}]}>
            문의 내용
          </StyledText>

          <TextInput
            multiline={true}
            style={[styles.inputbox2, globalstyles.p1]}
            placeholder={`문의내용을 자유롭게 작성해 주세요! \r\n상단에 입력하신 연락처로 성실히 답변을 드리겠습니다.`}
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
