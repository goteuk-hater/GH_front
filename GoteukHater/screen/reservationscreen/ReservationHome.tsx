import {NavigationProp, NavigationState} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Card from '../../components/globalcomponents/Card';
import TimeselectCard from '../../components/reservation/TimeselectCard';
import {height, scale, width} from '../../config/globalStyles';

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
  {time: '11:30 AM', maxnumber: 16, nownumber: 12},
];
const ReservationHome = ({navigation}: Props) => {
  const [selectedDate, setSelectedDate] = React.useState('');
  return (
    <View style={styles.container}>
      <Card style={{width: '100%', marginBottom: 24 * scale}}>
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
      <Text style={styles.title}>시간선택</Text>
      <Text style={styles.titleinfo}>
        예약이 완료된 시간이라도 빈자리 알림 신청을 할 수 있어요.
      </Text>
      <FlatList
        data={DATA}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({item}) => (
          <TimeselectCard
            time={item.time}
            maxnumber={item.maxnumber}
            nownumber={item.nownumber}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F6F6F9',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    paddingTop: 16 * height,
  },
  calendar: {
    borderRadius: 15 * scale,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 4 * height,
  },
  titleinfo: {
    fontSize: 12,
    color: '#8b8b8b',
    fontWeight: '400',
    marginBottom: 12 * height,
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
