import React, {type PropsWithChildren} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import Card from '../../components/globalcomponents/Card';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {height, width} from '../../config/globalStyles';
import {Shadow} from 'react-native-shadow-2';
interface Props {
  navigation: NavigationProp<NavigationState>;
}
const BookSearchScreen = ({navigation}: Props) => {
  const [text, onChangeText] = React.useState('검색어를 입력해주세요.');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.catalogList}>
        <Text style={styles.catalog}>영역</Text>
        <Text style={styles.catalog}>최신순</Text>
      </View>
      <View style={styles.bookCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BookInfoScreen' as never)}>
          <Card style={styles.card}>
            <View style={styles.bookImage} />
            <View style={{width: 245}}>
              <Text numberOfLines={1} style={styles.bookTitle}>
                프로테스탄티즘의 윤리와 자본주의 정신
              </Text>
              <Text style={styles.bookSubject}>
                막스 베버 (문예출판사 2010)
              </Text>
              <View style={styles.starCover}>
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
              </View>
              <Text style={styles.review}>후기 6</Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BookInfoScreen' as never)}>
          <Card style={styles.card}>
            <View style={styles.bookImage} />
            <View style={{width: 245}}>
              <Text numberOfLines={1} style={styles.bookTitle}>
                프로테스탄티즘의 윤리와 자본주의 정신
              </Text>
              <Text style={styles.bookSubject}>
                막스 베버 (문예출판사 2010)
              </Text>
              <View style={styles.starCover}>
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
                <View
                  style={{backgroundColor: 'black', width: 10, height: 10}}
                />
              </View>
              <Text style={styles.review}>후기 6</Text>
            </View>
          </Card>
        </TouchableOpacity>
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
  catalogList: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  catalog: {
    color: 'black',
    fontSize: 14,
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    color: '#818181',
    width: '100%',
    borderRadius: 15,
  },
  bookCard: {
    width: '100%',
    ellipsizeMode: 'tail',
    flexShrink: 1,
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
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
export default BookSearchScreen;
