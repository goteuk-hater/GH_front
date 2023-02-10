import React, {Children, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import Card from '../globalcomponents/Card';

interface InformationCardProps {
  name: string;
  grade: number;
  major: string;
  studentNumber: number;
}
const InformationCard: React.FunctionComponent<
  InformationCardProps
> = props => {
  return (
    <Card
      style={{width: '100%'}}
      children={
        <View style={styles.row}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: 'gray',
              borderRadius: 50,
              marginRight: 12,
            }}></View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700', marginBottom: 4}}>
              {props.name}
            </Text>

            <Text style={{fontSize: 12, fontWeight: '700', color: '#636570'}}>
              {props.major} {props.grade}학년 - {props.studentNumber}
            </Text>
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});
export default InformationCard;
