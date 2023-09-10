import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import Card from '../../components/globalcomponents/Card';
import StyledText from '../../components/globalcomponents/StyledText';
import StatusCard from '../../components/main/status/StatusCard';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';

import axios from 'axios';
import {SERVER_URL} from '@env';
import {BookReservation} from '../../../config/Type';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const BookingListScreen = () => {
  const data = useSelector((state: RootState) => state.Status);
  console.log(data);
  if (data.status == 'loading') {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StyledText>Loading...</StyledText>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.flatlist}>
          {data.data.length === 0 ? (
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
          ) : (
            data.data?.map((item: BookReservation) => (
              <StatusCard
                title={item.book_name}
                date={item.date}
                time={item.time}
                classification="서양의 역사와 사상"
                detail={true}
                style={{width: 358 * width, marginBottom: 8 * height}}
                location={item.location}
                reserve_id={item.reserve_id}
                key={item.reserve_id}
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F6F6F9'},
  flatlist: {
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    marginTop: StatusBar.currentHeight || 8,
    marginBottom: 16 * height,
  },
});

export default BookingListScreen;
