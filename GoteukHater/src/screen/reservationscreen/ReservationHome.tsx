import {
  CommonActions,
  NavigationProp,
  NavigationState,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';

import Card from '../../components/globalcomponents/Card';

import StyledText from '../../components/globalcomponents/StyledText';
import TimeselectCard from '../../components/reservation/TimeselectCard';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import Btn from '../../components/globalcomponents/Btn';

import axios from 'axios';
import {SERVER_URL} from '@env';

import {Fetchuser} from '../../hooks/Hooks';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
interface ReservationInfo {
  available_seats: string;
  date: string;
  time: string;
  total_seats: string;
}

// 예약 일정을 담는 타입

const DATA = [
  {time: '10:00 AM', maxnumber: 16, nownumber: 16},
  {time: '10:30 AM', maxnumber: 16, nownumber: 16},
  {time: '11:00 AM', maxnumber: 16, nownumber: 16},
  {time: '11:30 AM', maxnumber: 16, nownumber: 16},
  {time: '14:00 PM', maxnumber: 16, nownumber: 12},
  {time: '14:30 PM', maxnumber: 16, nownumber: 12},
  {time: '15:00 PM', maxnumber: 16, nownumber: 12},
  {time: '15:30 PM', maxnumber: 16, nownumber: 12},
  {time: '16:00 PM', maxnumber: 16, nownumber: 12},
  {time: '16:30 PM', maxnumber: 16, nownumber: 12},
];

const ReservationHome = ({navigation}: Props) => {
  //내일 날짜
  const today = new Date();
  // new Date().getFullYear(),
  // new Date().getMonth(),
  // new Date().getDate() + 1,
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 2,
  );
  const nextmonth = new Date(
    tomorrow.getFullYear(),
    tomorrow.getMonth() + 1,
    tomorrow.getDate(),
  );
  console.log(tomorrow);
  const mindate = tomorrow.toISOString().slice(0, 10);
  const maxdate = nextmonth.toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selected, setSelected] = React.useState<number>(-1);
  const [selectedTime, setSelectedTime] = React.useState<string>('');

  const [ReservationSchedule, setReservationSchedule] = React.useState<
    ReservationInfo[]
  >([]);
  const setSelect = async (time: string) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ReservationDetail',
        params: {
          time: time,
          date: selectedDate,
        },
      }),
    );
  };
  const fetchdata = async () => {
    const user = await Fetchuser();

    console.log(user);
    const res = await axios.post(`${SERVER_URL}user/calender`, {
      id: user.id,
      password: user.password,
    });

    setReservationSchedule(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  // mindate부터 maxdate까지 getday가 0,6인 날짜만 뽑아서 배열에 넣기
  return (
    <ScrollView style={styles.container}>
      <View style={{rowGap: 20 * height, marginTop: 16 * height}}>
        <Card style={{width: '100%'}}>
          <Calendar
            initialDate={mindate}
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
            style={styles.calendar}
            theme={{
              selectedDayTextColor: 'white',
              selectedDayBackgroundColor: '#8A8A8E',
              textDayStyle: {
                fontSize: 16 * scale,
                ...Platform.select({
                  android: {
                    fontFamily: 'SUIT-Bold',
                  },
                  ios: {
                    fontWeight: '700',
                    fontFamily: 'SUITVariable-Regular',
                  },
                }),
              },
            }}
            dayComponent={({date, state}) => {
              let strdate = date.dateString;

              let day = new Date(strdate).getDay();
              if (
                mindate <= strdate &&
                strdate <= maxdate &&
                day != 0 &&
                day != 6
              ) {
                state = 'enabled';
              } else {
                state = 'disabled';
              }
              if (state === 'disabled') {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:
                        selectedDate === date.dateString ? '#8A8A8E' : 'white',
                      width: 40 * scale,
                      height: 40 * scale,
                      borderRadius: 20 * scale,
                    }}>
                    <StyledText
                      style={[
                        globalstyles.h4,
                        {
                          color:
                            state === 'disabled'
                              ? 'gray'
                              : date.dateString === selectedDate
                              ? 'white'
                              : 'black',
                        },
                      ]}>
                      {date.day}
                    </StyledText>
                  </View>
                );
              }
              return (
                <TouchableOpacity
                  onPress={state => {
                    if (state === 'disabled') {
                      return;
                    }
                    setSelectedDate(date.dateString);
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:
                        selectedDate === date.dateString ? '#8A8A8E' : 'white',
                      width: 40 * scale,
                      height: 40 * scale,
                      borderRadius: 20 * scale,
                    }}>
                    <StyledText
                      style={[
                        globalstyles.h4,
                        {
                          color:
                            state === 'disabled'
                              ? 'gray'
                              : date.dateString === selectedDate
                              ? 'white'
                              : 'black',
                        },
                      ]}>
                      {date.day}
                    </StyledText>
                  </View>
                </TouchableOpacity>
              );
            }}
            enableSwipeMonths={true}
            markedDates={{
              [selectedDate]: {selected: true},
            }}
            renderArrow={direction => (
              <Btn
                Icon={direction == 'left' ? 'chevron-back' : 'chevron-forward'}
                color="#8A8A8E"
              />
            )}
            renderHeader={date => {
              const header = date.toString('yyyy년 MM월');
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <StyledText style={globalstyles.h2}>{header}</StyledText>
                </View>
              );
            }}
          />
        </Card>
        <View style={{rowGap: 4 * height}}>
          <StyledText style={globalstyles.h1}>시간선택</StyledText>
          {/* <StyledText style={[globalstyles.p1, styles.titleinfo]}>
            예약이 완료된 시간이라도 빈자리 알림 신청을 할 수 있어요.
          </StyledText> */}
        </View>
        <FlatList
          data={DATA}
          numColumns={2}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={{height: 12 * height}} />}
          renderItem={({item, index}) => (
            <TimeselectCard
              time={item.time}
              maxnumber={item.maxnumber}
              nownumber={item.nownumber}
              marginRight={index % 2 == 0 ? 12 : 0}
              setSelect={() => setSelect(item.time)}
              isselected={selected == index}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    marginBottom: 40 * height,
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
