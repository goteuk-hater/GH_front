import {NavigationProp, NavigationState} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import Card from '../../components/globalcomponents/Card';
import StyledText from '../../components/globalcomponents/StyledText';
import StatusCard from '../../components/main/status/StatusCard';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import {Fetchuser} from '../../../hooks/Hooks';
import axios from 'axios';
import {SERVER_URL} from '@env';
import {BookReservation} from '../../../config/Type';

const BookingListScreen = () => {
  const [data, setData] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchdata = async () => {
    const user = await Fetchuser();
    const res = await axios
      .post(`${SERVER_URL}user/reserve_status`, {
        id: user.id,
        password: user.password,
      })
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(e => {
        setData([]);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StyledText>Loading...</StyledText>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.flatlist}>
          {data?.length === 0 ? (
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
          ) : (
            data?.map((item: BookReservation) => (
              <StatusCard
                title={item.book_name}
                date={item.date}
                time={item.time}
                classification="서양의 역사와 사상"
                detail={true}
                style={{width: 358 * width, marginBottom: 8 * height}}
                location={item.location}
                reserve_id={item.reserve_id}
                key={item.reserve_id}
                fetchdata={fetchdata}
              />
            ))
          )}
        </View>
      </ScrollView>
      {/* <FlatList
        style={styles.flatlist}
        data={data}
        showsVerticalScrollIndicator={true}
        indicatorStyle={'black'}
        renderItem={({item}) => (
          <StatusCard
            title="프로테스탄티즘의 윤리와 자본주의 정신"
            date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
            classification="서양의 역사와 사상"
            detail={true}
            style={{width: 358 * width, marginBottom: 8 * height}}
            location="광개토관 108B호"
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
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F6F6F9'},
  flatlist: {
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
    marginTop: StatusBar.currentHeight || 8,
    marginBottom: 16 * height,
  },
});

export default BookingListScreen;
