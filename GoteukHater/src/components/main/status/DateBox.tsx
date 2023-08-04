import {StyleSheet, View} from 'react-native';
import Calendar from 'react-native-vector-icons/Feather';
import Clock from 'react-native-vector-icons/MaterialIcons';
import {globalstyles, scale, width} from '../../../../config/globalStyles';

import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';

interface DateProps {
  year: number;
  month: string;
  day: number;
  time: string;
}
const DateBox = ({date}: {date: DateProps}) => {
  return (
    <FlexView
      style={[globalstyles.row, styles.datebox]}
      gapHorizental={8 * width}>
      <FlexView style={globalstyles.row} gapHorizental={4 * width}>
        <Calendar name="calendar" size={14 * scale} color="#B1B3C5" />
        <StyledText style={[globalstyles.h5, styles.timetext]}>
          {date.month} {date.day}th, {date.year}
        </StyledText>
      </FlexView>
      <FlexView style={globalstyles.row} gapHorizental={4 * width}>
        <Clock name="schedule" size={14 * scale} color="#B1B3C5" />
        <StyledText style={[globalstyles.h5, styles.timetext]}>
          {date.time}
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
