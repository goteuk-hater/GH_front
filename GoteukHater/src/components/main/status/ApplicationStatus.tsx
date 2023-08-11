import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {height, width} from '../../../../config/globalStyles';
import FlexView from '../../globalcomponents/FlexView';
import StatusCard from './StatusCard';

const ApplicationStatus = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusCard
          title={'프로테스탄티즘의 윤리와 자본주의 정신'}
          date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
          classification="서양의 역사와 사상"
        />
        <StatusCard
          title={'총균쇠'}
          date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
          classification="서양의 역사와 사상"
        />
        <StatusCard
          title={'총균쇠'}
          date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
          classification="서양의 역사와 사상"
        />
        <StatusCard
          title={'총균쇠'}
          date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
          classification="서양의 역사와 사상"
        />
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
