import React from 'react';
import {StyleSheet, View} from 'react-native';
import FlexView from '../../globalcomponents/FlexView';
import CertificationCard from './CertificationCard';
import {height, width} from '../../../../config/globalStyles';
const CertificationView = () => {
  return (
    <View style={{rowGap: 4 * height}}>
      <View style={[styles.row, {columnGap: 8 * width}]}>
        <CertificationCard title={'서양의 역사와 사상'} maxnum={4} mynum={1} />
        <CertificationCard title={'동양의 역사와 사상'} maxnum={2} mynum={2} />
      </View>
      <View style={[styles.row, {columnGap: 8 * width}]}>
        <CertificationCard title={'과학 사상'} maxnum={1} mynum={0} />
        <CertificationCard title={'동서양의 문학'} maxnum={3} mynum={3} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CertificationView;
