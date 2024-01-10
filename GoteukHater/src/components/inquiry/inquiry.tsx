import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Btn from '../global/Btn';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StyledText from '../global/StyledText';
import {globalStyle, height, scale} from '@/config/globalStyle';
import axios from 'axios';
import {DISCORD_URL} from '@env';
export const Inquiry = () => {
  const [text, onChangeText] = useState<string>('');
  const [address, onChangeAddress] = useState<string>('');
  const {dismiss} = useBottomSheetModal();
  const navigation = useNavigation();
  const postInquiry = async () => {
    const description = `연락처: ${address}\n문의내용: ${text}`;
    const res = await axios.post(DISCORD_URL, {
      embeds: [
        {
          title: '문의사항',
          description: description,
        },
      ],
    });
    await dismiss();
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Btn title="제출하기" onPress={postInquiry} />,
    });
  }, [postInquiry]);
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
          <TextInput
            style={[styles.inputBox, globalStyle.p1]}
            placeholder="답변받을 이메일 주소나 휴대전화 번호를 입력해 주세요."
            placeholderTextColor="#D9D9D9"
            onChangeText={onChangeAddress}
            value={address}
          />
        </View>
        <View>
          <StyledText style={[styles.title, {marginTop: 0 * height}]}>
            문의 내용
          </StyledText>
          <TextInput
            multiline={true}
            style={[styles.inputBox2, globalStyle.p1]}
            placeholder={`문의내용을 자유롭게 작성해 주세요! \r\n상단에 입력하신 연락처로 성실히 답변을 드리겠습니다.`}
            placeholderTextColor="#D9D9D9"
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
  inputBox: {
    backgroundColor: 'white',
    height: 47 * height,
    padding: 12 * scale,
    borderRadius: 10 * scale,
    borderWidth: 1 * scale,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
  },
  inputBox2: {
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
