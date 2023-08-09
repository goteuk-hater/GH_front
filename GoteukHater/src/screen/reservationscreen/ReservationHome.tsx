import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef} from 'react';
import {Text, StyleSheet, View, FlatList, Platform} from 'react-native';
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
import Btn from '../../components/globalcomponents/Btn';
import {ModalHeader} from '../../components/reservation/ModalHeader';

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
  const setSelect = () => {
    navigation.navigate('ReservationDetail' as never);
  };
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Btn
  //         Icon="chevron-forward"
  //         onPress={() => {
  //           next();
  //         }}
  //       />
  //     ),
  //   });
  // }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <View style={{rowGap: 20 * height}}>
          <Card style={{width: '100%'}}>
            <Calendar
              onDayPress={day => {
                setSelectedDate(day.dateString);
                console.log(day.dateString);
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
              enableSwipeMonths={true}
              markedDates={{
                [selectedDate]: {selected: true},
              }}
              renderArrow={direction => (
                <Btn
                  Icon={
                    direction == 'left' ? 'chevron-back' : 'chevron-forward'
                  }
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
            <StyledText style={[globalstyles.p1, styles.titleinfo]}>
              예약이 완료된 시간이라도 빈자리 알림 신청을 할 수 있어요.
            </StyledText>
          </View>
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
                setSelect={() => setSelect()}
                isselected={selected == index}
              />
            )}
          />
        </View>
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
