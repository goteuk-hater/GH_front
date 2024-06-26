import {StyleSheet, View} from 'react-native';
import {QAcomponent} from './QAcomponent';
import {height, width} from '@/config/globalStyle';
const data = [1, 2, 3, 4];
export const QAlist = () => {
  return (
    <View style={styles.container}>
      <QAcomponent
        tag="가입/탈퇴"
        title="아이디와 비밀번호는 어디에 저장되나요?"
        content="“고특싫어”는 사용자의 아이디와 비밀번호를 서버에 저장하지 않습니다.
        아이디 및 비밀번호는 사용자의 개인 휴대전화에 저장되며, 로그아웃시에는 모든 정보가 삭제됩니다."
      />
      <QAcomponent
        tag="문의"
        title="개발자 분에게 직접 문의드릴 수는 없나요?"
        content="1:1 문의하기를 통해 문의글을 작성해 주시면 개발자 분께 전달됩니다."
      />
      <QAcomponent
        tag="개발"
        title="다음 업데이트에 추가되는 기능이 있나요?"
        content="푸시 알림 및 게시판 기능이 추가될 예정입니다."
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 4 * height,
  },
});
