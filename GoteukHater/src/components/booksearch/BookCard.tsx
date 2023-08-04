import React from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import Card from '../globalcomponents/Card';
import {NavigationProp, NavigationState} from '@react-navigation/native';

const BookCard: React.FC = () => {
  return (
    <View>
      <Card style={styles.card}>
        <View style={styles.bookImage} />
        <View style={{width: 245}}>
          <Text numberOfLines={1} style={styles.bookTitle}>
            프로테스탄티즘의 윤리와 자본주의 정신
          </Text>
          <Text style={styles.bookSubject}>막스 베버 (문예출판사 2010)</Text>
          <View style={styles.starCover}>
            <View style={{backgroundColor: 'black', width: 10, height: 10}} />
            <View style={{backgroundColor: 'black', width: 10, height: 10}} />
            <View style={{backgroundColor: 'black', width: 10, height: 10}} />
            <View style={{backgroundColor: 'black', width: 10, height: 10}} />
            <View style={{backgroundColor: 'black', width: 10, height: 10}} />
          </View>
          <Text style={styles.review}>후기 6</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
  },
  bookImage: {
    width: 79,
    height: 118,
    backgroundColor: 'black',
    marginRight: 10,
  },
  bookTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 4,
  },
  bookSubject: {
    fontSize: 10,
    color: 'black',
    marginBottom: 8,
  },
  starCover: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  review: {
    fontSize: 10,
    color: '#B0B0B0',
  },
});

export default BookCard;
