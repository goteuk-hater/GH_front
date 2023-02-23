import React, {Children, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {height, scale, width} from '../../config/globalStyles';
import Card from '../globalcomponents/Card';
import StyledText from '../globalcomponents/StyledText';
import {SvgUri} from 'react-native-svg';

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
              width: 60 * width,
              height: 60 * height,
              borderRadius: 50 * scale,
              marginRight: 12 * width,
              backgroundColor: 'gray',
            }}>
            <SvgUri
              width={'100%'}
              height={'100%'}
              uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
            />
          </View>
          <View>
            <StyledText
              style={{
                fontSize: 20 * scale,
                fontWeight: '700',
                marginBottom: 4,
              }}>
              {props.name}
            </StyledText>

            <StyledText
              style={{
                fontSize: 12 * scale,
                fontWeight: '700',
                color: '#636570',
              }}>
              {props.major} {props.grade}학년 - {props.studentNumber}
            </StyledText>
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
    marginBottom: 4 * height,
  },
});
export default InformationCard;
