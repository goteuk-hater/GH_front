import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StatusCard from '../../components/main/StatusCard';
import {width} from '../../config/globalStyles';
const BookingListScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 8,
        paddingLeft: 16,
        paddingRight: 8,
        marginBottom: 16,
      }}>
      {data.map((data, index) => {
        return (
          <StatusCard
            title={'프로테스탄티즘의 윤리와 자본주의 정신'}
            date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
            classification={3}
            detail={true}
            style={{width: 358 * width}}
            location={'광개토관 108B호'}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};
export default BookingListScreen;
