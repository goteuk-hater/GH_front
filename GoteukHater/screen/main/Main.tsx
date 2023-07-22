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
import CertificationView from './CertificationView';
import ApplicationStatus from './ApplicationStatus';

interface Props {
  navigation: NavigationProp<NavigationState>;
}
const Main = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
            <StyledText style={styles.title}>내 정보</StyledText>
            <InformationCard
              name={'김민수'}
              grade={4}
              major={'컴퓨터공학과'}
              studentNumber={18011485}
            />
          </View>
          <View style={styles.section}>
            <View style={styles.titlebox}>
              <StyledText style={styles.title}>나의 신청현황</StyledText>
              <TouchableOpacity
                style={{paddingTop: 8 * height, paddingLeft: 4 * width}}
                onPress={() =>
                  navigation.navigate('BookingListScreen' as never)
                }>
                <StyledText style={styles.listbtn}>전체보기</StyledText>
              </TouchableOpacity>
            </View>
            <ApplicationStatus />
          </View>
          <View style={styles.section}>
            <StyledText style={styles.title}>나의 인증현황</StyledText>
            <CertificationView />
          </View>
          <View style={styles.section}>
            <StyledText style={styles.title}>바로 가기</StyledText>
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
  listbtn: {fontSize: 12 * scale, fontWeight: '500'},
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
