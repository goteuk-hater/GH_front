import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import {globalStyle, height, width} from '@/config/globalStyle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BookCard from '../../components/booksearch/BookCard';
import {SelectHeader} from '../../components/booksearch/SelectHeader';
import {Book} from '../../config/Type';
import {FlatList} from 'react-native';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/RootReducer';
import StyledText from '@/components/global/StyledText';
import {useNavigation} from '@react-navigation/native';

const BookSearchScreen = () => {
  const navigation = useNavigation();
  const [tagList, setTagList] = useState<string[]>([]);
  const [text, setText] = React.useState('');
  const [loading, setLoading] = useState(false);
  const data = useSelector((state: RootState) => state.Books.data);
  const addTag = (tag: string) => {
    let newtagList = [...tagList];
    if (newtagList.includes(tag)) {
      return;
    }
    newtagList.push(tag);
    setTagList(newtagList);
    Keyboard.dismiss();
  };
  const removeTag = (tag: string) => {
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
  const flatListRef = React.useRef<ScrollView>(null);
  const scrollToTop = () => {
    flatListRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  useEffect(() => {
    scrollToTop();
  }, [filteredData]);

  const [renderCount, setRenderCount] = useState(10);
  useEffect(() => {
    filter();
    setRenderCount(8);
  }, [tagList, text]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F6F6F9',
      }}>
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
      </View>
      <ScrollView
        ref={flatListRef}
        onScroll={event => {
          const offsetY = event.nativeEvent.contentOffset.y;
          const contentHeight = event.nativeEvent.contentSize.height;
          if (offsetY >= contentHeight - 600 * height) {
            setRenderCount(renderCount + 8);
          }
        }}
        contentContainerStyle={styles.scrollView}
        scrollEventThrottle={16}
        style={{marginTop: 12 * height}}>
        {filteredData.length === 0 && (
          <StyledText style={[globalStyle.p1, {textAlign: 'center'}]}>
            검색 결과가 없습니다.
          </StyledText>
        )}
        {filteredData.map((book, index) => {
          if (index >= renderCount) {
            return;
          }
          return (
            <View style={styles.wrapCard} key={book.title}>
              <BookCard Book={book} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    flexWrap: 'wrap',
    marginLeft: 16 * width,
  },
});

export default BookSearchScreen;
