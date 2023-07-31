import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  globalstyles,
  height,
  p1,
  scale,
  width,
} from '../../../config/globalStyles';
import Card from '../../globalcomponents/Card';
import StyledText from '../../globalcomponents/StyledText';
import {SvgUri} from 'react-native-svg';
import FlexView from '../../globalcomponents/FlexView';

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
      // children={
      //   <View style={styles.row}>
      //     <View
      //       style={{
      //         width: 60 * width,
      //         height: 60 * height,
      //         borderRadius: 50 * scale,
      //         marginRight: 12 * width,
      //         backgroundColor: 'gray',
      //       }}>
      //       <SvgUri
      //         width={'100%'}
      //         height={'100%'}
      //         uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      //       />
      //     </View>
      //     <View>
      //       <StyledText
      //         style={{
      //           fontSize: 20 * scale,
      //           fontWeight: '700',
      //           marginBottom: 4,
      //         }}>
      //         {props.name}
      //       </StyledText>

      //       <StyledText style={[globalstyles.p1, {color: '#636570'}]}>
      //         {props.major} {props.grade}학년 - {props.studentNumber}
      //       </StyledText>
      //     </View>
      //   </View>
      // }
    >
      <FlexView style={globalstyles.row} gapHorizental={12 * width}>
        <SvgUri
          width={60 * scale}
          height={60 * scale}
          uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
        <FlexView gapVertical={4 * height}>
          <StyledText style={globalstyles.h2}>{props.name}</StyledText>
          <StyledText style={[globalstyles.h4, {color: '#636570'}]}>
            {props.major} {props.grade}학년 - {props.studentNumber}
          </StyledText>
        </FlexView>
      </FlexView>
    </Card>
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
