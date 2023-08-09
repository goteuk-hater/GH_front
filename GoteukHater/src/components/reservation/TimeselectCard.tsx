import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../globalcomponents/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyledText from '../globalcomponents/StyledText';
import FlexView from '../globalcomponents/FlexView';
import {useEffect, useState} from 'react';
import {globalstyles, width} from '../../../config/globalStyles';
interface Propstype {
  time: string;
  maxnumber: number;
  nownumber: number;
  marginRight: number;
  isselected: boolean;
  setSelect: () => void;
}
const TimeselectCard: React.FC<Propstype> = props => {
  const seats = props.maxnumber - props.nownumber;
  const [fontcolor, setfontcolor] = useState(seats > 0 ? '#20B358' : '#9F9F9F');
  const [backgroundcolor, setbackgroundcolor] = useState(
    seats > 0 ? '#FFFFFF' : '#9F9F9F',
  );
  const [timecolor, settimecolor] = useState(seats > 0 ? '#000000' : '#9F9F9F');
  const changestyle = () => {
    if (props.isselected) {
      setfontcolor('#FFF500');
      setbackgroundcolor('#FF6961');
      settimecolor('#FFFFFF');
    }
    if (!props.isselected) {
      if (seats > 0) {
        setfontcolor('#20B358');
        setbackgroundcolor('#FFFFFF');
        settimecolor('#000000');
      } else {
        setbackgroundcolor('#9F9F9F');
        setfontcolor('#FFFFFF');
        settimecolor('#FFFFFF');
      }
    }
  };
  useEffect(() => {
    changestyle();
  }, [props.isselected]);
  return (
    <TouchableOpacity
      style={{marginRight: props.marginRight * width}}
      disabled={seats <= 0}
      onPress={props.setSelect}>
      <Card style={{backgroundColor: backgroundcolor, width: 173 * width}}>
        <View style={[globalstyles.row_spacebetween]}>
          <StyledText style={[globalstyles.h4, {color: timecolor}]}>
            {props.time}
          </StyledText>
          <StyledText style={[globalstyles.h4, {color: fontcolor}]}>
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
