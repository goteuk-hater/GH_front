import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {width} from '../../../../config/globalStyles';
import FlexView from '../../globalcomponents/FlexView';
import StatusCard from './StatusCard';

const ApplicationStatus = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <FlexView style={styles.container} gapHorizental={8 * width}>
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
        <StatusCard
          title={'총균쇠'}
          date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
          classification={2}
        />
        <StatusCard
          title={'총균쇠'}
          date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
          classification={2}
        />
      </FlexView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ApplicationStatus;
