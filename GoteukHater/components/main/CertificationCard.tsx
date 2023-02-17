import React, {Children, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {height, scale, width} from '../../config/globalStyles';
import Card from '../globalcomponents/Card';
interface CertificationCardProps {
  title: string;
  maxnum: number;
  mynum: number;
}
const CertificationCard: React.FunctionComponent<
  CertificationCardProps
> = props => {
  let rate = (props.mynum / props.maxnum) * 150;
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
        <View>
          <Text style={styles.certifiedtitle}>{props.title}</Text>
          <Text style={styles.certifiedtext}>
            {props.mynum}/{props.maxnum}권
          </Text>
          <View style={styles.barbox}>
            <View style={[styles.bar, barcolor, {width: rate}]}></View>
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  certifiedtitle: {
    fontSize: 14 * scale,
    fontWeight: '700',
    marginBottom: 8 * width,
  },
  certifiedtext: {
    fontSize: 10 * scale,
    fontWeight: '400',
    textAlign: 'right',
    color: '#8B8B8B',
    marginBottom: 8 * height,
  },
  barbox: {
    borderRadius: 20 * scale,
    flexDirection: 'row',
    width: 150 * width,
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
  },
});
export default CertificationCard;
