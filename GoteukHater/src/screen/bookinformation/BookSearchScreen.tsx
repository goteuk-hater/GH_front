import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  FlatList,
  VirtualizedList,
  VirtualizedListProps,
} from 'react-native';
import {globalStyle, height, width} from '@/config/globalStyle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BookCard from '../../components/booksearch/BookCard';
import {SelectHeader} from '../../components/booksearch/SelectHeader';
import {Book} from '../../config/Type';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/RootReducer';
import StyledText from '@/components/global/StyledText';
import {useNavigation} from '@react-navigation/native';

const BookSearchScreen = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [text, setText] = React.useState('');
  const data = useSelector((state: RootState) => state.Books.data);
  const addTag = (tag: string) => {
    let newTagList = [...tagList];
    if (newTagList.includes(tag)) {
      return;
    }
    newTagList.push(tag);
    setTagList(newTagList);
    Keyboard.dismiss();
  };
  const removeTag = (tag: string) => {
    let newTagList = [...tagList];
    if (!newTagList.includes(tag)) {
      return;
    }
    newTagList.splice(newTagList.indexOf(tag), 1);
    setTagList(newTagList);
    Keyboard.dismiss();
  };

  const [filteredData, setFilteredData] = useState(Array<Book>);
  const filter = () => {
    let newData = [...data];
    if (tagList.length === 0 && text === '') {
      setFilteredData(newData);
      return;
    }
    if (tagList.length !== 0) {
      newData = newData.filter(book => {
        return tagList.includes(book.category.category);
      });
    }
    if (text !== '') {
      newData = newData.filter(book => {
        return book.title.includes(text);
      });
    }
    setFilteredData(newData);
  };
  const {dismissAll} = useBottomSheetModal();
  const flatListRef = React.useRef<FlatList>(null);
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  };
  useEffect(() => {
    scrollToTop();
  }, [filteredData]);

  useEffect(() => {
    filter();
  }, [tagList, text]);
  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <EvilIcons name="search" size={20} color="black" />
        <TextInput
          style={[globalStyle.p2, styles.input]}
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
        addTag={addTag}
        removeTag={removeTag}
        setTagList={setTagList}
      />
      <FlatList
        ref={flatListRef}
        data={filteredData}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <BookCard Book={item} />}
        ItemSeparatorComponent={() => <View style={{height: 12 * height}} />}
        keyExtractor={(item, index) => item.title}
        numColumns={2}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={6}
        updateCellsBatchingPeriod={10}
        ListFooterComponent={
          <View style={{height: 12 * height, width: '100%'}} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16 * width,
    marginTop: 12 * height,
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
  },
  wrapCard: {
    width: '50%',
    marginBottom: 12 * height,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  scrollView: {
    flexDirection: 'row',
    gap: 12 * width,
    marginBottom: 12 * height,
  },
});

export default BookSearchScreen;
