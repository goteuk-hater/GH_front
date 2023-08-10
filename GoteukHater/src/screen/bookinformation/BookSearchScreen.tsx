import React, {type PropsWithChildren} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';
import LinbkedBookCard from '../../components/booksearch/LinkedBookCard';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {ScreenStackHeaderSubview} from 'react-native-screens';
import {globalstyles, height, width} from '../../../config/globalStyles';
import {SafeAreaView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../../components/globalcomponents/Card';
import BookCard from '../../components/booksearch/BookCard';

interface propsType {
  navigation: NavigationProp<NavigationState>;
}

const BookSearchScreen: React.FC<propsType> = props => {
  const DATA = [1, 2, 3, 4];
  const [text, onChangeText] = React.useState('');
  const book1 = {
    title: '책 제목1',
  };
  const book2 = {
    title: '책 제목2',
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <EvilIcons name="search" size={20} color="black" />
        <TextInput
          style={[globalstyles.p2, styles.input]}
          onChangeText={onChangeText}
          value={text}
          placeholder="검색어를 입력해 주세요."
        />
        <EvilIcons name="close" size={20} color="black" />
      </View>
      <View style={globalstyles.row_spacebetween}>
        <View style={[globalstyles.row_spacebetween, {columnGap: 4 * width}]}>
          <Text style={globalstyles.h4}>영역</Text>
          <AntDesign name="down" size={15} color="black" />
        </View>
        <View style={globalstyles.row_spacebetween}>
          <Text style={globalstyles.h4}>최신순</Text>
          <AntDesign name="down" size={15} color="black" />
        </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <FlatList
          data={DATA}
          numColumns={2}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={{height: 8 * height}} />}
          renderItem={({item, index}) => (
            <BookCard
              Book={{
                title: '프로탄스텐티즘의 윤리와 자본주의 정신',
                author: '막스 베버',
                publisher: '민수출판사 (2022)',
                type: '서양의 역사와 사상',
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12 * height,
    paddingHorizontal: 16 * width,
    rowGap: 20 * height,
  },

  searchbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 12 * width,
    alignItems: 'center',
  },
  input: {
    height: 40 * height,
    width: 285 * width,
    color: '#818181',
  },
});

export default BookSearchScreen;
