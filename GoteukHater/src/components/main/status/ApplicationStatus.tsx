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
import {Fetchuser} from '../../../../hooks/Hooks';
import Card from '../../globalcomponents/Card';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
import StatusCard from './StatusCard';
interface Props {
  statusData: [];
  fetchstatusData: () => void;
}
const ApplicationStatus = ({statusData, fetchstatusData}: Props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {statusData?.length === 0 ? (
          <View>
            <Card
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 32 * scale,
              }}>
              <StyledText style={globalstyles.h3}>
                예약한 시험이 없습니다.
              </StyledText>
            </Card>
          </View>
        ) : (
          statusData?.map((item: BookReservation) => (
            <StatusCard
              title={item.book_name}
              date={item.date}
              time={item.time}
              classification="서양의 역사와 사상"
              fetchdata={fetchstatusData}
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
