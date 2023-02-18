import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StatusCard from '../../components/main/StatusCard';
import InformationCard from '../../components/main/ImformationCard';
import CertificationCard from '../../components/main/CertificationCard';
import LinkCard from '../../components/main/LinkCard';
import Formbtn from '../../components/globalcomponents/Formbtn';
import {height, scale, width} from '../../config/globalStyles';
import StyledText from '../../components/globalcomponents/StyledText';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
const Main = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
            <StyledText style={styles.title} content="내 정보" />
            <InformationCard
              name={'김민수'}
              grade={4}
              major={'컴퓨터공학과'}
              studentNumber={18011485}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.titlebox}>
              <StyledText style={styles.title} content="나의 신청현황" />
              <TouchableOpacity
                style={{paddingTop: 8 * height, paddingLeft: 4 * width}}
                onPress={() =>
                  navigation.navigate('BookingListScreen' as never)
                }>
                <StyledText style={styles.listbtn} content="전체보기" />
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <StatusCard
                  title={'프로테스탄티즘의 윤리와 자본주의 정신'}
                  date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
                  classification={3}
                />
                <StatusCard
                  title={'총균쇠'}
                  date={{year: 2022, month: 'Jan', day: 12, time: '11:30'}}
                  classification={2}
                />
              </ScrollView>
            </View>
          </View>
          <View style={styles.section}>
            <StyledText style={styles.title} content="나의 인증현황" />
            <View style={styles.row}>
              <CertificationCard
                title={'서양의 역사와 사상'}
                maxnum={4}
                mynum={1}
              />
              <CertificationCard
                title={'동양의 역사와 사상'}
                maxnum={2}
                mynum={2}
              />
            </View>
            <View style={styles.row}>
              <CertificationCard title={'과학 사상'} maxnum={1} mynum={0} />
              <CertificationCard title={'동서양의 문학'} maxnum={3} mynum={3} />
            </View>
          </View>
          <View style={styles.section}>
            <StyledText style={styles.title} content="바로가기" />
            <LinkCard
              title={'고전도서 정보 게시판'}
              text={'고전도서시험에는 어떤 책들이 있는지! 후기는 어떤지!'}
              navigation={navigation}
              link={'BookSearchScreen'}
            />
            <LinkCard
              title={'시험 족보 게시판'}
              text={'시험을 보고 난 후 생각나는 문제를 공유해보아요'}
              navigation={navigation}
              link={'ExamMainScreen'}
            />
          </View>
        </View>
      </SafeAreaView>
      <Formbtn title={'시험 예약하기'} icon={'calendar'} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    flex: 1,
  },
  listbtn: {fontSize: 12 * scale, fontWeight: '400'},
  content: {
    flex: 1,
    marginTop: 8 * height,
    marginBottom: 8 * height,
    marginLeft: 16 * width,
    marginRight: 16 * width,
  },
  section: {
    marginBottom: 16 * height,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4 * height,
  },
  title: {
    fontFamily: 'SUITVariable-Regular',
    fontSize: 18 * scale,
    marginBottom: 12 * height,
    fontWeight: '700',
  },
  titlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Main;
