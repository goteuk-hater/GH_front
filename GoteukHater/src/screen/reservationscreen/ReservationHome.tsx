import {
  CommonActions,
  NavigationProp,
  NavigationState,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Platform, BackHandler} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../../components/global/Card';
import StyledText from '@/components/global/StyledText';
import TimeselectCard from '../../components/reservation/TimeselectCard';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import Btn from '../../components/global/Btn';
import axios from 'axios';
import {SERVER_URL} from '@env';
import {fetchUser} from '../../hooks/Hooks';
import {Daycomponent} from '../../components/reservation/DayComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {getCalendarData} from '@/service/api';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
interface ReservationInfo {
  available_seats: number;
  id: string;
  time: string;
  total_seats: number;
}
interface Reservation {
  [date: string]: ReservationInfo[];
}

const ReservationHome = ({navigation}: Props) => {
  const [selectedDate, setSelectedDate] = React.useState('');
  const status = useSelector((state: RootState) => state.Status);
  const user = useSelector((state: RootState) => state.user);
  const [ReservationSchedule, setReservationSchedule] =
    React.useState<Reservation>();
  const [reservationKey, setReservationKey] = React.useState<string[]>([]);
  const [reservationInfo, setReservationInfo] = React.useState<
    ReservationInfo[]
  >([]);
  const setSelect = async (time: string, id: string) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ReservationDetail',
        params: {
          time: time,
          date: selectedDate,
          id: id,
        },
      }),
    );
  };
  const fetchData = async () => {
    const res = await getCalendarData({
      id: user.id,
      password: user.password,
    });
    setReservationSchedule(res.data);
    let key = Object.keys(res.data);
    let newunavaible: string[] = [];
    status.data.map((item, index) => {
      let date = new Date(item.date);
      let startDay = date.getDay();
      for (let i = startDay; i < 6; i++) {
        let strDate = date.toISOString().slice(0, 10);
        newunavaible.push(strDate);
        date.setDate(date.getDate() + 1);
      }
    });
    let newkey = key.filter(item => {
      return !newunavaible.includes(item);
    });
    setReservationKey(newkey);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (selectedDate == '') return;
    if (ReservationSchedule === undefined) return;
    setReservationInfo(ReservationSchedule[selectedDate]);
  }, [selectedDate]);
  const {dismiss} = useBottomSheetModal();
  useEffect(() => {
    const backAction = () => {
      dismiss();
      return true;
    };

    // 리스너 등록
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      // 이벤트 리스너 해제
      backHandler.remove();
    };
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={{rowGap: 20 * height, marginTop: 16 * height}}>
        <Card style={{width: '100%'}}>
          <Calendar
            initialDate={reservationKey[0]}
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
              if (date == undefined) return null;
              let strdate = date ? date.dateString : '';
              if (!ReservationSchedule) {
                return (
                  <SkeletonPlaceholder speed={2500}>
                    <SkeletonPlaceholder.Item
                      width={30 * scale}
                      height={30 * scale}
                      borderRadius={5 * scale}
                    />
                  </SkeletonPlaceholder>
                );
              }
              if (
                reservationKey.includes(strdate) && ReservationSchedule
                  ? ReservationSchedule[strdate].length > 0
                  : false
              ) {
                return (
                  <Daycomponent
                    date={date}
                    setSelectedDate={setSelectedDate}
                    disabled={false}
                    selected={selectedDate == strdate}
                  />
                );
              }
              return (
                <Daycomponent
                  date={date}
                  setSelectedDate={() => {
                    null;
                  }}
                  disabled={true}
                  selected={false}
                />
              );
            }}
            enableSwipeMonths={true}
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
                  <StyledText style={globalStyle.h2}>{header}</StyledText>
                </View>
              );
            }}
          />
        </Card>
        <View style={{rowGap: 4 * height}}>
          <StyledText style={globalStyle.h1}>시간선택</StyledText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {reservationInfo.map((item, index) => {
            return (
              <TimeselectCard
                time={item.time}
                maxnumber={item.total_seats}
                nownumber={item.available_seats}
                setSelect={() => setSelect(item.time, item.id)}
                key={
                  item.id +
                  item.time +
                  index +
                  item.total_seats +
                  item.available_seats
                }
              />
            );
          })}
        </View>
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
  skeleton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30 * scale,
    height: 30 * scale,
    borderRadius: 20 * scale,
  },
});
export default ReservationHome;
