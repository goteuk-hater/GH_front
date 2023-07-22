import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StatusCard from '../../components/main/StatusCard';

import {height, scale, width} from '../../config/globalStyles';
const ApplicationStatus = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <StatusCard
        title={'프로테스탄티즘의 윤리와 자본주의 정신'}
        date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
        classification={3}
      />
      <StatusCard
        title={'총균쇠'}
        date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
        classification={2}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default ApplicationStatus;
