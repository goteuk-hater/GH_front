// https://classic.sejong.ac.kr/home/book/book_03.jpg
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BookCard from '../../components/booksearch/BookCard';
import StyledText from '../../components/globalcomponents/StyledText';
import {SelectHeader} from '../../components/booksearch/SelectHeader';
import axios from 'axios';
import {SERVER_URL} from '@env';
import {Book} from '../../../config/Type';
import {FlatList} from 'react-native';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/RootReducer';

const BookSearchScreen = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [text, setText] = React.useState('');
  const [loading, setLoading] = useState(false);
  const data = useSelector((state: RootState) => state.Books.data);
  const addtag = (tag: string) => {
    let newtagList = [...tagList];
    if (newtagList.includes(tag)) {
      return;
    }
    newtagList.push(tag);
    setTagList(newtagList);
    Keyboard.dismiss();
  };
  const removetag = (tag: string) => {
    let newtagList = [...tagList];
    if (!newtagList.includes(tag)) {
      return;
    }
    newtagList.splice(newtagList.indexOf(tag), 1);
    setTagList(newtagList);
    Keyboard.dismiss();
  };

  const [filteredData, setFilteredData] = useState(Array<Book>);
  const filter = () => {
    let newdata = [...data];
    if (tagList.length === 0 && text === '') {
      setFilteredData(newdata);
      return;
    }
    if (tagList.length !== 0) {
      newdata = newdata.filter(book => {
        return tagList.includes(book.category.category);
      });
    }
    if (text !== '') {
      newdata = newdata.filter(book => {
        return book.title.includes(text);
      });
    }
    setFilteredData(newdata);
  };
  const {dismissAll} = useBottomSheetModal();
  const flatListRef = React.useRef<FlatList>(null);
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0});
  };
  useEffect(() => {
    scrollToTop();
  }, [filteredData]);

  const itemseparater = useCallback(() => {
    return <View style={{height: 12 * height}} />;
  }, []);
  const renderItem = useCallback(({item}: {item: Book}) => {
    return <BookCard Book={item} key={item.id.toString()} />;
  }, []);

  useEffect(() => {
    filter();
  }, [tagList, text]);
  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <EvilIcons name="search" size={20} color="black" />
        <TextInput
          style={[globalstyles.p2, styles.input]}
          onChangeText={text => {
            setText(text);
          }}
          onFocus={() => {
            dismissAll();
          }}
          value={text}
          placeholder="검색어를 입력해 주세요."
          placeholderTextColor={'#818181'}
        />
        <TouchableOpacity
          onPress={() => {
            setText('');
          }}>
          <EvilIcons name="close" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <SelectHeader
        tagList={tagList}
        addtag={addtag}
        removetag={removetag}
        setTagList={setTagList}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <FlatList
          ref={flatListRef}
          data={filteredData}
          renderItem={renderItem}
          numColumns={2}
          // getItemLayout={(data, index) => ({
          //   length: 300 * height,
          //   offset: 300 * height * index,
          //   index,
          // })}
          ItemSeparatorComponent={itemseparater}
          keyExtractor={(item: Book) => item.id.toString()}
          ListFooterComponent={<View style={{height: 100 * height}} />}
          onEndReachedThreshold={0.1}
          maxToRenderPerBatch={6}
        />
      </TouchableWithoutFeedback>
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
