// https://classic.sejong.ac.kr/home/book/book_03.jpg
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
import BookCard from '../../components/booksearch/BookCard';
import StyledText from '../../components/globalcomponents/StyledText';
import TagModal from '../../components/booksearch/TagModal';
import {SelectHeader} from '../../components/booksearch/SelectHeader';
import axios from 'axios';
import {SERVER_URL} from '@env';
import {Book} from '../../../config/Type';

const BookSearchScreen = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [text, onChangeText] = React.useState('');
  const [loading, setLoading] = useState(true);
  const addtag = (tag: string) => {
    let newtagList = [...tagList];
    if (newtagList.includes(tag)) {
      return;
    }
    newtagList.push(tag);
    setTagList(newtagList);
  };
  const removetag = (tag: string) => {
    let newtagList = [...tagList];
    if (!newtagList.includes(tag)) {
      return;
    }
    newtagList.splice(newtagList.indexOf(tag), 1);
    setTagList(newtagList);
  };
  const [data, setData] = useState(Array<Book>);
  const fetchdata = async () => {
    setLoading(true);
    const response = await axios.get(`${SERVER_URL}books/book_data`);
    setData(response.data.data);
    setFilteredData(response.data.data);
    setLoading(false);
  };
  const [filteredData, setFilteredData] = useState(Array<Book>);

  const renderItem = (book: Book) => {
    console.log(book);
    return <BookCard Book={book} />;
  };
  const itemseparater = () => {
    return <View style={{height: 8 * height}} />;
  };
  useEffect(() => {
    setFilteredData(
      data.filter((item: any) => {
        if (tagList.length > 0) {
          if (!tagList.includes(item.category.category)) {
            return false;
          }
        }
        if (text.length > 0) {
          if (!item.title.includes(text)) {
            return false;
          }
        }
        return true;
      }),
    );
  }, [tagList, text]);

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <EvilIcons name="search" size={20} color="black" />
        <TextInput
          style={[globalstyles.p2, styles.input]}
          onChangeText={onChangeText}
          value={text}
          placeholder="검색어를 입력해 주세요."
          placeholderTextColor={'#818181'}
        />
        <TouchableOpacity onPress={() => onChangeText('')}>
          <EvilIcons name="close" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <SelectHeader
        tagList={tagList}
        addtag={addtag}
        removetag={removetag}
        setTagList={setTagList}
      />
      <View style={globalstyles.row_spacebetween}>
        {loading ? (
          <StyledText style={globalstyles.p2}>로딩중...</StyledText>
        ) : (
          <FlatList
            data={filteredData}
            numColumns={2}
            style={{marginBottom: 120 * height}}
            ItemSeparatorComponent={itemseparater}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => renderItem(item)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12 * height,
    paddingHorizontal: 16 * width,
    rowGap: 12 * height,
    backgroundColor: '#F6F6F9',
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
    // color: '#818181',
  },
});

export default BookSearchScreen;
