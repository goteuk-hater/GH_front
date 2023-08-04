import React from 'react';
import {View, ViewStyle, StyleProp, Alert} from 'react-native';
import Card from '../../globalcomponents/Card';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, width} from '../../../../config/globalStyles';
import ClassBox from '../../globalcomponents/ClassBox';
import StyledText from '../../globalcomponents/StyledText';
import DateBox from './DateBox';

interface StatusProps {
  title: string;
  date: {
    year: number;
    month: string;
    day: number;
    time: string;
  };
  classification: number;
  detail?: boolean;
  style?: StyleProp<ViewStyle>;
  location?: string;
}
const StatusCard: React.FunctionComponent<StatusProps> = props => {
  return (
    <Card style={[props.style, {minWidth: 220 * width}]}>
      <View style={globalstyles.row_spacebetween}>
        <ClassBox classification={props.classification} usedScreen="main" />
        {props.detail ? (
          <TouchableOpacity
            onPress={() => {
              Alert.alert('취소알림');
            }}>
            <StyledText style={globalstyles.p2}>예약 취소</StyledText>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      <StyledText style={globalstyles.h4}>{props.title}</StyledText>
      <View style={globalstyles.row_spacebetween}>
        <DateBox date={props.date} />
        {props.detail ? (
          <StyledText style={[globalstyles.p1, {color: '#818181'}]}>
            광개토관 108B호
          </StyledText>
        ) : (
          <></>
        )}
      </View>
    </Card>
  );
};

export default StatusCard;
