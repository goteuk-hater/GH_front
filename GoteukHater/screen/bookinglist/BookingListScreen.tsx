import {NavigationProp, NavigationState} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/globalcomponents/Card';
import FlexView from '../../components/globalcomponents/FlexView';
import StyledText from '../../components/globalcomponents/StyledText';
import StatusCard from '../../components/main/status/StatusCard';
import {globalstyles, height, scale, width} from '../../config/globalStyles';
import Header from '../bookinformation/Header';
interface Props {
  navigation: NavigationProp<NavigationState>;
}
const BookingListScreen = ({navigation}: Props) => {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const Back = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="나의 신청현황" back={Back} />
      <FlatList
        style={{
          flex: 1,
          paddingLeft: 16 * width,
          paddingRight: 16 * width,
          marginTop: StatusBar.currentHeight || 8,
          marginBottom: 16 * height,
        }}
        data={DATA}
        showsVerticalScrollIndicator={true}
        indicatorStyle={'black'}
        renderItem={({item}) => (
          <StatusCard
            title={'프로테스탄티즘의 윤리와 자본주의 정신'}
            date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
            classification={3}
            detail={true}
            style={{width: 358 * width, marginBottom: 8 * height}}
            location={'광개토관 108B호'}
            key={item.toString()}
          />
        )}
        keyExtractor={item => item.toString()}
        ListEmptyComponent={() => (
          <Card
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32 * scale,
            }}>
            <StyledText style={globalstyles.h3}>
              예약한 시험이 없습니다.
            </StyledText>
          </Card>
        )}
      />
    </SafeAreaView>
  );
};
export default BookingListScreen;
