import {SERVER_URL} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../../config/globalStyles';
import {BookReservation} from '../../../../config/Type';
import {Fetchuser} from '../../../hooks/Hooks';
import Card from '../../globalcomponents/Card';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import StatusCard from './StatusCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';

const ApplicationStatus = () => {
  const statusData = useSelector((state: RootState) => state.Status);
  if (statusData.status == 'loading') {
    return (
      <View
        style={{
          width: 358 * width,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32 * scale,
        }}>
        <StyledText style={globalstyles.h3}>로딩중...</StyledText>
      </View>
    );
  }
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {statusData.data?.length === 0 ? (
          <Card
            style={{
              width: 358 * width,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32 * scale,
            }}>
            <StyledText style={globalstyles.h3}>
              예약한 시험이 없습니다.
            </StyledText>
          </Card>
        ) : (
          statusData.data?.map((item: BookReservation) => (
            <StatusCard
              title={item.book_name}
              date={item.date}
              time={item.time}
              classification="서양의 역사와 사상"
              key={item.reserve_id}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8 * width,
  },
});

export default ApplicationStatus;
