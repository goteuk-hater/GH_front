import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '../globalcomponents/StyledText';
import {globalstyles, scale, width} from '../../../config/globalStyles';
import Card from '../globalcomponents/Card';

import AntDesign from 'react-native-vector-icons/AntDesign';
export const QAcomponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card style={styles.container}>
      <TouchableOpacity
        style={globalstyles.row_spacebetween}
        onPress={() => {
          setOpen(!open);
        }}>
        <View style={[globalstyles.row, {columnGap: 4 * width}]}>
          <StyledText style={styles.type}>[가입/탈퇴]</StyledText>
          <StyledText style={styles.title}>
            아이디와 비밀번호는 서버에 저장되나요?
          </StyledText>
        </View>

        <AntDesign
          name={open ? 'up' : 'down'}
          size={13 * scale}
          color="#8B8B8B"
        />
      </TouchableOpacity>
      {open && (
        <StyledText
          style={[
            globalstyles.p1,
            {
              color: '#8B8B8B',
            },
          ]}
          line={Infinity}>
          아이디와 비밀번호는 서버에 저장되나요? 아이디와 비밀번호는 서버에
          저장되나요? 아이디와 비밀번호는 서버에 저장되나요? 아이디와 비밀번호는
          서버에 저장되나요? 아이디와 비밀번호는 서버에 저장되나요?
        </StyledText>
      )}
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  type: {
    color: '#D8808A',
    ...globalstyles.h4,
  },
  title: {
    ...globalstyles.h4,
    color: 'black',
  },
});
