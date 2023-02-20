import React, {type PropsWithChildren} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import Card from '../../components/globalcomponents/Card';
import BookCard from '../../components/booksearch/BookCard';
import StyledText from '../../components/globalcomponents/StyledText';
import ClassBox from '../../components/globalcomponents/ClassBox';

const BookInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bookCard}>
        <BookCard />
      </View>
      <View style={styles.reviewWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>시험 후기</Text>
          <Text style={styles.subText}> (23)</Text>
        </View>
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
            <Text style={styles.reviewedDate}>2023년 01월 07일</Text>
            <View
              style={{
                backgroundColor: 'black',
                width: 100,
                height: 10,
                marginBottom: 8,
              }}
            />
            <Text style={{fontSize: 12, color: 'black'}}>
              그냥저냥 공부할만 했던 시험인거 같아요..
              {'\n'}
              {'\n'}
              김민수씨의 사상을 잘 알고있다면 쉽고, 아얘 모르시는 분은 공 부하기
              어려우실꺼 같아요
            </Text>
          </Card>
        </View>
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
            <Text style={styles.reviewedDate}>2023년 01월 07일</Text>
            <View
              style={{
                backgroundColor: 'black',
                width: 100,
                height: 10,
                marginBottom: 8,
              }}
            />
            <Text style={{fontSize: 12, color: 'black'}}>
              그냥저냥 공부할만 했던 시험인거 같아요..
              {'\n'}
              {'\n'}
              김민수씨의 사상을 잘 알고있다면 쉽고, 아얘 모르시는 분은 공 부하기
              어려우실꺼 같아요
            </Text>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
  },
  bookCard: {
    width: '100%',
    ellipsizeMode: 'tail',
    flexShrink: 1,
    marginBottom: 20,
  },
  reviewWrapper: {
    width: '100%',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 900,
    color: 'black',
  },
  subText: {
    fontSize: 10,
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
  },
});

export default BookInfoScreen;
