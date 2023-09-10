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
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/RootReducer';

const InformationCard = () => {
  const user = useSelector((state: RootState) => state.User);
  return (
    <Card style={{width: '100%'}}>
      <View style={[globalstyles.row, {columnGap: 12 * width}]}>
        <SvgUri
          width={60 * scale}
          height={60 * scale}
          uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
        <View style={{rowGap: 4 * height}}>
          <StyledText style={globalstyles.h2}>{user.name}</StyledText>
          <StyledText style={[globalstyles.h4, {color: '#636570'}]}>
            {user.major} {user.grade}학년 - {user.id}
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
