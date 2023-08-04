import React, {type PropsWithChildren} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Card from '../../components/globalcomponents/Card';
import ClassBox from '../../components/globalcomponents/ClassBox';
import Formbtn from '../../components/Modal/Formbtn';
import StyledText from '../../components/globalcomponents/StyledText';
import {height} from '../../../config/globalStyles';
const ExamMainScreen = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25 * height,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            width: 358,
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'black',
              marginLeft: 12,
              marginRight: 8,
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="검색어를 입력해 주세요."
          />
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'black',
              marginRight: 12,
            }}
          />
        </View>
        <Text style={styles.title}>최근 내가 본 시험</Text>
        <Text style={styles.title}>최근 작성 게시글</Text>
        <View style={styles.reviewCard}>
          <Card style={{width: '100%'}}>
            <View style={styles.revierTitleWrapper}>
              <View style={{flexDirection: 'row'}}>
                <StyledText
                  content="김민수의 사상"
                  style={{marginRight: 8}}></StyledText>
                <ClassBox classification={2} usedScreen="bookInfo" />
              </View>
              <View style={{backgroundColor: 'black', width: 16, height: 16}} />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 8}}>
              <Text style={styles.reviewedDate}>2023년 01월 07일</Text>
              <View style={{backgroundColor: 'black', width: 40, height: 10}} />
            </View>
            <Text style={{fontSize: 12, color: 'black'}}>
              Q. 김민수가 죽음을 앞두고 마지막을 왕에게 전달하고자 했던 말은?
              {'\n'}
              {'\n'}
              1. 내 죽음을 적에게 알리지 말라 {'\n'}
              2. 나의 죽음은 당신의 것이요{'\n'}
              3. 죽음......공포........{'\n'}
              4. 쏠수있어 {'\n'}
              {'\n'}
              A. (3) ...
            </Text>
          </Card>
        </View>
      </View>
      <Formbtn title={'시험 예약하기'} icon={'calendar'} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
  },
  input: {
    fontFamily: 'SUITVariable-Regular',
    height: 40 * height,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 8,
    color: '#818181',
    borderRadius: 15,
    width: 300,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 700,
    marginBottom: 20,
  },
  reviewCard: {
    width: '100%',
  },
  revierTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewTitle: {
    fontSize: 16,
    color: 'bold',
  },
  reviewedDate: {
    fontSize: 9,
    marginRight: 4,
  },
});
export default ExamMainScreen;
