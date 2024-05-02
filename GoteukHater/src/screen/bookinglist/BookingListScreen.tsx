import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import Card from '../../components/global/Card';
import StyledText from '@/components/global/StyledText';
import StatusCard from '../../components/main/status/StatusCard';
import {globalStyle, height, scale, width} from '@/config/globalStyle';

import axios from 'axios';
import {SERVER_URL} from '@env';

import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {BookReservation} from '@/config/Type';

const BookingListScreen = () => {
  const bookingList = useSelector((state: RootState) => state.Status);
  if (bookingList.status == 'loading') {
    return (
      <SkeletonPlaceholder speed={1500}>
        <View style={styles.flatlist}>
          <SkeletonPlaceholder.Item
            width={358 * width}
            height={111 * height}
            borderRadius={12}
          />
        </View>
      </SkeletonPlaceholder>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.flatlist}>
          {bookingList.data.length === 0 ? (
            <Card
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 32 * scale,
              }}>
              <StyledText style={globalStyle.h3}>
                예약한 시험이 없습니다.
              </StyledText>
            </Card>
          ) : (
            bookingList.data?.map(item => (
              <StatusCard
                title={item.book_name}
                date={item.date}
                time={item.time}
                classification={item.classification}
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
