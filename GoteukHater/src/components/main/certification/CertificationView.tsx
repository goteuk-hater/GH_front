import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import FlexView from '../../global/FlexView';
import CertificationCard from './CertificationCard';
import {height, width} from '@/config/globalStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/RootReducer';
const dict = {
  1: '과학 사상(1권)',
  2: '동·서양의 문학(3권)',
  3: '동양의역사와사상(2권)',
  4: '서양의역사와사상(4권)',
};
const CertificationView = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={{rowGap: 4 * height}}>
      <View style={[styles.row, {columnGap: 8 * width}]}>
        <CertificationCard
          title={'서양의 역사와 사상'}
          maxnum={4}
          mynum={user.read_certification[dict[4]]}
        />
        <CertificationCard
          title={'동양의 역사와 사상'}
          maxnum={2}
          mynum={user.read_certification[dict[3]]}
        />
      </View>
      <View style={[styles.row, {columnGap: 8 * width}]}>
        <CertificationCard
          title={'과학 사상'}
          maxnum={1}
          mynum={user.read_certification[dict[1]]}
        />
        <CertificationCard
          title={'동서양의 문학'}
          maxnum={3}
          mynum={user.read_certification[dict[2]]}
        />
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
