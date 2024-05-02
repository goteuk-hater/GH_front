import React from 'react';
import {View, ViewStyle, StyleProp, TouchableOpacity} from 'react-native';
import Card from '../../global/Card';
import {globalStyle, width} from '@/config/globalStyle';
import ClassBox from '../../global/ClassBox';
import StyledText from '../../global/StyledText';
import DateBox from './DateBox';
import {AlertModal} from '../../Modal/AlertModal';

import axios from 'axios';
import {SERVER_URL} from '@env';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store/store';
import {asyncStatusFetch} from '../../../store/slice/StatusSlice';
import {postCancel} from '@/service/api';

interface StatusProps {
  title: string;
  date: string;
  time: string;
  classification: string;
  detail?: boolean;
  style?: StyleProp<ViewStyle>;
  location?: string;
  reserve_id?: string;
}

const StatusCard: React.FunctionComponent<StatusProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visible2, setVisible2] = React.useState<boolean>(false);
  const closemodal = () => {
    setVisible(false);
  };
  const closemodal2 = () => {
    dispatch(
      asyncStatusFetch({
        id: user.id,
        password: user.password,
      }),
    );
    setVisible2(false);
  };
  const [description, setDescription] = React.useState<string>('');
  const onCancel = async () => {
    const res = await postCancel(
      {
        id: user.id,
        password: user.password,
      },
      props.reserve_id as string,
    );
    setDescription(res);
    setVisible(false);
  };
  const onConfirm = () => {
    onCancel().then(err => {
      setVisible2(true);
    });
  };

  return (
    <Card style={[props.style, {minWidth: 240 * width}]}>
      <View style={globalStyle.row_space_between}>
        <ClassBox classification={props.classification} usedScreen="main" />
        {props.detail ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <StyledText style={globalStyle.p2}>예약 취소</StyledText>
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        <StyledText style={globalStyle.h4}>{props.title}</StyledText>
      </View>
      <View style={globalStyle.row_space_between}>
        <DateBox date={props.date} time={props.time} />
        {props.detail ? (
          <>
            <AlertModal
              visible={visible}
              title="예약 취소"
              description={`${props.date} ${props.time} `}
              confirmText="예약을 취소하시겠습니까?"
              accpetText="예"
              rejectText="아니오"
              onClose={closemodal}
              onConfirm={onConfirm}
            />
            <AlertModal
              visible={visible2}
              description={description}
              accpetText="확인"
              onConfirm={closemodal2}
              onClose={closemodal2}
            />
            <StyledText style={[globalStyle.p1, {color: '#818181'}]}>
              {props.location?.slice(0, 10)}
            </StyledText>
          </>
        ) : null}
      </View>
    </Card>
  );
};

export default StatusCard;
