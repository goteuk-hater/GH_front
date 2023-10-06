import {StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '../globalcomponents/StyledText';
import {globalstyles} from '../../../config/globalStyles';
import {useDispatch} from 'react-redux';
import {setScreen} from '../../store/slice/TabSlice';

interface Props {
  screen: string;
}
export const SwitchTab = (props: Props) => {
  const {screen} = props;
  const dispatch = useDispatch();
  const handlePress = (screen: string) => {
    dispatch(setScreen(screen));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handlePress('question');
        }}>
        <StyledText
          style={screen === 'question' ? styles.activetext : styles.text}>
          자주묻는 질문
        </StyledText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handlePress('inquiry');
        }}>
        <StyledText
          style={screen === 'inquiry' ? styles.activetext : styles.text}>
          1:1 문의하기
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 8,
  },
  activetext: {
    ...globalstyles.h3,
    color: 'black',
    textDecorationLine: 'underline',
  },
  text: {
    ...globalstyles.h3,
    color: '#8B8B8B',
  },
});
