import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../../global/Card';
import StyledText from '../../global/StyledText';
import {globalStyle, height, width} from '@/config/globalStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/RootReducer';

const InformationCard = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Card style={styles.card}>
      <View style={styles.wrapper}>
        <View style={{rowGap: 4 * height}}>
          {/* <StyledText style={globalStyle.h2}>{user.name}</StyledText>
          <StyledText style={[globalStyle.h4, {color: '#636570'}]}>
            {user.major} {user.grade}학년 - {user.id}
          </StyledText> */}
          <StyledText style={globalStyle.h2}>홍길동</StyledText>
          <StyledText style={[globalStyle.h4, {color: '#636570'}]}>
            {user.major} {user.grade}학년 - 12345678
          </StyledText>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  wrapper: {
    ...globalStyle.row,
    columnGap: 12 * width,
  },
});
export default InformationCard;
