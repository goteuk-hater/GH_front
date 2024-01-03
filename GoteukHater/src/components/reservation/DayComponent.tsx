import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import StyledText from '../global/StyledText';
import {globalStyle, scale} from '@/config/globalStyle';
import {DateData, DayState} from 'react-native-calendars/src/types';

interface Props {
  date: DateData;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
  selected: boolean;
}
export const Daycomponent = (props: Props) => {
  const today = new Date();
  const todayString = `${today.getFullYear()}-${
    today.getMonth() + 1 < 10
      ? '0' + (today.getMonth() + 1)
      : today.getMonth() + 1
  }-${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`;
  let boxStyle = {
    backgroundColor: '#FFFFFF',
  };
  let textStyle = {
    color: '#000000',
  };
  if (props.disabled) {
    textStyle = {
      color: '#BDBDBD',
    };
  }
  if (props.date.dateString === todayString) {
    textStyle = {
      color: '#2508ff',
    };
  }
  if (props.selected) {
    boxStyle = {
      backgroundColor: '#6f6f6f',
    };
    textStyle = {
      color: '#ffffff',
    };
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.setSelectedDate(props.date.dateString);
      }}>
      <View style={[styles.container, boxStyle]}>
        <StyledText style={[globalStyle.h4, textStyle]}>
          {props.date.day}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30 * scale,
    height: 30 * scale,
    borderRadius: 20 * scale,
  },
});
