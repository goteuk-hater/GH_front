import React, {type PropsWithChildren} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import Card from '../../components/globalcomponents/Card';
import BookCard from '../../components/booksearch/BookCard';

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
      </View>
      <View style={styles.reviewCard}></View>
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
});

export default BookInfoScreen;
