import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../global/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyledText from '../global/StyledText';
import FlexView from '../global/FlexView';
import {useEffect, useState} from 'react';
import {globalStyle, height, width} from '@/config/globalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface Propstype {
  time: string;
  maxnumber: number;
  nownumber: number;
  setSelect: () => void;
}
const TimeselectCard: React.FC<Propstype> = props => {
  const seats = props.maxnumber - props.nownumber;
  const [fontcolor, setfontcolor] = useState(seats > 0 ? '#20B358' : '#ffffff');
  const [backgroundcolor, setbackgroundcolor] = useState(
    seats > 0 ? '#FFFFFF' : '#9F9F9F',
  );
  const [timecolor, settimecolor] = useState(seats > 0 ? '#000000' : '#ffffff');
  return (
    <TouchableOpacity
      key={props.time}
      disabled={seats <= 0}
      style={{marginBottom: 8 * height}}
      onPress={props.setSelect}>
      <Card style={{backgroundColor: backgroundcolor, width: 173 * width}}>
        <View style={[globalStyle.row_space_between]}>
          <View style={globalStyle.row_space_between}>
            <StyledText style={[globalStyle.h4, {color: timecolor}]}>
              {props.time}
            </StyledText>
            <AntDesign
              name="clockcircleo"
              size={12 * width}
              color={timecolor}
              style={{marginLeft: 4 * width}}
            />
          </View>

          <StyledText style={[globalStyle.h4, {color: fontcolor}]}>
            {seats > 0
              ? `남은자리 : ${props.maxnumber - props.nownumber}`
              : '예약불가'}
          </StyledText>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default TimeselectCard;
