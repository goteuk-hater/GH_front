import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyle, height, scale, width} from '@/config/globalStyle';

import Card from '../../global/Card';
import FlexView from '../../global/FlexView';
import StyledText from '../../global/StyledText';
interface CertificationCardProps {
  title: string;
  maxnum: number;
  mynum: number;
}
const CertificationCard: React.FunctionComponent<
  CertificationCardProps
> = props => {
  let rate = (props.mynum / props.maxnum) * 151 * width;
  let barcolor;
  if (props.maxnum <= props.mynum) {
    barcolor = styles.green;
  } else {
    barcolor = styles.red;
  }

  return (
    <Card
      style={{width: 175 * width}}
      children={
        <View style={{rowGap: 8 * height}}>
          <StyledText style={globalStyle.h3}>{props.title}</StyledText>
          <StyledText style={[styles.certifiedtext, globalStyle.p2]}>
            {props.mynum}/{props.maxnum}권
          </StyledText>
          <View style={styles.barbox}>
            <View style={[styles.bar, {width: rate}, barcolor]} />
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  certifiedtitle: {
    ...globalStyle.h4,
  },
  certifiedtext: {
    textAlign: 'right',
    color: '#8B8B8B',
  },
  barbox: {
    borderRadius: 20 * scale,
    flexDirection: 'row',
    width: 151 * width,
    height: 8 * height,
    backgroundColor: '#EAEEF2',
  },
  bar: {
    borderRadius: 20 * scale,
  },
  red: {
    backgroundColor: '#FF6961',
  },
  green: {
    backgroundColor: '#20B358',
    maxWidth: 151 * width,
  },
});
export default CertificationCard;
