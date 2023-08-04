import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {
  Agenda,
  AgendaList,
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/globalcomponents/Card';
import FlexView from '../../components/globalcomponents/FlexView';
import StyledText from '../../components/globalcomponents/StyledText';
import TimeselectCard from '../../components/reservation/TimeselectCard';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import Header from '../bookinformation/Header';

interface Props {
  navigation: NavigationProp<NavigationState>;
}

const DATA = [
  {time: '11:30 AM', maxnumber: 16, nownumber: 16},
  {time: '11:30 AM', maxnumber: 16, nownumber: 16},
  {time: '11:30 AM', maxnumber: 16, nownumber: 12},
  {time: '11:30 AM', maxnumber: 16, nownumber: 12},
  {time: '11:30 AM', maxnumber: 16, nownumber: 12},
  {time: '11:30 AM', maxnumber: 16, nownumber: 12},
];

const ReservationHome = ({navigation}: Props) => {
  const [selectedDate, setSelectedDate] = React.useState('2020-05-14');
  const next = () => {
    navigation.navigate('ReservationDetail' as never);
  };
  const [selected, setSelected] = React.useState<number>(-1);
  return (
    <>
      <Header title="고전시험 예약" next={next} nextText="다음" />
      <View style={styles.container}>
        <FlexView gapVertical={20 * height}>
          <Card style={{width: '100%'}}>
            <Calendar
              onDayPress={day => {
                setSelectedDate(day.dateString);
              }}
              style={styles.calendar}
              theme={{
                selectedDayTextColor: 'white',
                selectedDayBackgroundColor: 'gray',
              }}
              enableSwipeMonths={true}
              markedDates={{
                [selectedDate]: {selected: true},
                '2023-02-15': {marked: true, dotColor: 'red'},
                '2023-02-16': {marked: true},
              }}
            />
          </Card>
          <FlexView>
            <StyledText style={globalstyles.h1}>시간선택</StyledText>
            <StyledText style={[globalstyles.p1, styles.titleinfo]}>
              예약이 완료된 시간이라도 빈자리 알림 신청을 할 수 있어요.
            </StyledText>
          </FlexView>
          <FlatList
            data={DATA}
            numColumns={2}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View style={{height: 12 * height}} />
            )}
            renderItem={({item, index}) => (
              <TimeselectCard
                time={item.time}
                maxnumber={item.maxnumber}
                nownumber={item.nownumber}
                marginRight={index % 2 == 0 ? 12 : 0}
                setSelect={() => setSelected(index)}
                isselected={selected == index}
              />
            )}
          />
        </FlexView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    paddingTop: 16 * height,
  },
  calendar: {
    marginBottom: 4 * height,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 4 * height,
  },
  titleinfo: {
    color: '#8b8b8b',
  },
  cardtime: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30 * scale,
    borderTopLeftRadius: 15 * scale,
    borderTopRightRadius: 15 * scale,
    backgroundColor: '#20B358',
  },
});
export default ReservationHome;
