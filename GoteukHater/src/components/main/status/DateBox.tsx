import {StyleSheet, View} from 'react-native';
import Calendar from 'react-native-vector-icons/Feather';
import Clock from 'react-native-vector-icons/MaterialIcons';
import {globalStyle, scale, width} from '@/config/globalStyle';

import FlexView from '../../global/FlexView';
import StyledText from '../../global/StyledText';

interface DateProps {
  date: string;
  time: string;
}
const DateBox = (props: DateProps) => {
  return (
    <FlexView
      style={[globalStyle.row, styles.datebox]}
      gapHorizental={8 * width}>
      <FlexView style={globalStyle.row} gapHorizental={4 * width}>
        <Calendar name="calendar" size={14 * scale} color="#B1B3C5" />
        <StyledText style={[globalStyle.h5, styles.timetext]}>
          {props.date}
        </StyledText>
      </FlexView>
      <FlexView style={globalStyle.row} gapHorizental={4 * width}>
        <Clock name="schedule" size={14 * scale} color="#B1B3C5" />
        <StyledText style={[globalStyle.h5, styles.timetext]}>
          {props.time}
        </StyledText>
      </FlexView>
    </FlexView>
  );
};
const styles = StyleSheet.create({
  datebox: {
    backgroundColor: 'rgba(228, 235, 253, 1)',
    alignSelf: 'flex-start',
    borderRadius: 10 * scale,
    padding: 6 * scale,
  },
  timetext: {
    color: '#646570',
    marginLeft: 4 * width,
  },
});

export default DateBox;
