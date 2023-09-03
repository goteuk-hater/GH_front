import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import Card from '../../globalcomponents/Card';
import StyledText from '../../globalcomponents/StyledText';
import {SvgUri} from 'react-native-svg';
import FlexView from '../../globalcomponents/FlexView';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../../config/globalStyles';
import {Student} from '../../../../config/Type';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface InformationCardProps {
  user: Student;
}
const InformationCard: React.FunctionComponent<
  InformationCardProps
> = props => {
  const fetchuser = async () => {
    const id = await AsyncStorage.getItem('id');
    if (id == null) {
      return '';
    }
    return id;
  };
  const [studentnumber, setStudentnumber] = React.useState('');
  useEffect(() => {
    fetchuser().then(res => {
      setStudentnumber(res);
    });
  }, []);

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
      <View style={[globalstyles.row, {columnGap: 12 * width}]}>
        <SvgUri
          width={60 * scale}
          height={60 * scale}
          uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
        <View style={{rowGap: 4 * height}}>
          <StyledText style={globalstyles.h2}>{props.user.name}</StyledText>
          <StyledText style={[globalstyles.h4, {color: '#636570'}]}>
            {props.user.major} {props.user.grade}학년 - {studentnumber}
          </StyledText>
        </View>
      </View>
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
