import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Card from '../../globalcomponents/Card';
import {globalstyles, width} from '../../../../config/globalStyles';
import ClassBox from '../../globalcomponents/ClassBox';
import StyledText from '../../globalcomponents/StyledText';
import DateBox from './DateBox';
import {AlertModal} from '../../Modal/AlertModal';

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
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visible2, setVisible2] = React.useState<boolean>(false);
  const closemodal = () => {
    setVisible(false);
  };
  const closemodal2 = () => {
    setVisible2(false);
  };

  const onConfirm = () => {
    setVisible(false);
    setVisible2(true);
  };
  return (
    <Card style={[props.style, {minWidth: 220 * width}]}>
      <View style={globalstyles.row_spacebetween}>
        <ClassBox classification={props.classification} usedScreen="main" />
        {props.detail ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <StyledText style={globalstyles.p2}>예약 취소</StyledText>
          </TouchableOpacity>
        ) : null}
      </View>

      <StyledText style={globalstyles.h4}>{props.title}</StyledText>
      <View style={globalstyles.row_spacebetween}>
        <DateBox date={props.date} />
        {props.detail ? (
          <>
            <AlertModal
              visible={visible}
              title="예약 취소"
              description="2023년 8월 4일 11:00 ~ 11:30"
              confirmText="예약을 취소하시겠습니까?"
              accpetText="예"
              rejectText="아니오"
              onClose={closemodal}
              onConfirm={onConfirm}
            />
            <AlertModal
              visible={visible2}
              description="예약이 취소되었습니다."
              accpetText="확인"
              onConfirm={closemodal2}
              onClose={closemodal2}
            />
            <StyledText style={[globalstyles.p1, {color: '#818181'}]}>
              광개토관 108B호
            </StyledText>
          </>
        ) : null}
      </View>
    </Card>
  );
};

export default StatusCard;
