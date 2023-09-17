import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../../config/globalStyles';

import Card from '../../globalcomponents/Card';
import FlexView from '../../globalcomponents/FlexView';
import StyledText from '../../globalcomponents/StyledText';
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
          <StyledText style={globalstyles.h3}>{props.title}</StyledText>
          <StyledText style={[styles.certifiedtext, globalstyles.p2]}>
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
    ...globalstyles.h4,
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
