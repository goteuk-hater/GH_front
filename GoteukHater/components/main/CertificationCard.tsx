import React, {Children, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {width} from '../../config/globalStyles';
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
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  certifiedtext: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'right',
    color: '#8B8B8B',
    marginBottom: 8,
  },
  barbox: {
    borderRadius: 20,
    flexDirection: 'row',
    width: 150,
    height: 8,
    backgroundColor: '#EAEEF2',
  },
  bar: {
    borderRadius: 20,
  },
  red: {
    backgroundColor: '#FF6961',
  },
  green: {
    backgroundColor: '#20B358',
  },
});
export default CertificationCard;
