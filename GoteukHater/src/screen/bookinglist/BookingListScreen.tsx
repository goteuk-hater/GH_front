import {NavigationProp, NavigationState} from '@react-navigation/native';
import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';

import Card from '../../components/globalcomponents/Card';
import StyledText from '../../components/globalcomponents/StyledText';
import StatusCard from '../../components/main/status/StatusCard';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
const BookingListScreen = () => {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={DATA}
        showsVerticalScrollIndicator={true}
        indicatorStyle={'black'}
        renderItem={({item}) => (
          <StatusCard
            title="프로테스탄티즘의 윤리와 자본주의 정신"
            date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
            classification="서양의 역사와 사상"
            detail={true}
            style={{width: 358 * width, marginBottom: 8 * height}}
            location="광개토관 108B호"
            key={item.toString()}
          />
        )}
        keyExtractor={item => item.toString()}
        ListEmptyComponent={() => (
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
        )}
      />
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
