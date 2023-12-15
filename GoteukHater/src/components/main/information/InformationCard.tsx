import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../../globalcomponents/Card';
import StyledText from '../../globalcomponents/StyledText';
import {globalstyles, height, width} from '../../../../config/globalStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/RootReducer';

const InformationCard = () => {
  const user = useSelector((state: RootState) => state.User);
  return (
    <Card style={styles.card}>
      <View style={styles.wrapper}>
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
  card: {
    width: '100%',
  },
  wrapper: {
    ...globalstyles.row,
    columnGap: 12 * width,
  },
});
export default InformationCard;
