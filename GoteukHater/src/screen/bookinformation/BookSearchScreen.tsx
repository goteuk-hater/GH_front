import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
import BookCard from '../../components/booksearch/BookCard';
import StyledText from '../../components/globalcomponents/StyledText';
import TagModal from '../../components/booksearch/TagModal';
import {SelectHeader} from '../../components/booksearch/SelectHeader';

interface propsType {
  navigation: NavigationProp<NavigationState>;
}

const booktype = {
  1: '서양의 역사와 사상',
  2: '동양의 역사와 사상',
  3: '동서양의 문학',
  4: '과학사',
};

const BookSearchScreen: React.FC<propsType> = props => {
  const [tagList, setTagList] = useState<string[]>([]);
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
  const DATA = [
    {
      title: '프로탄스텐티즘의 윤리와 자본주의 정신',
      author: '막스 베버',
      publisher: '민수출판사 (2022)',
      type: '서양의 역사와 사상',
    },
    {
      title: '프로탄스텐티즘의 윤리와 자본주의 정신',
      author: '막스 베버',
      publisher: '민수출판사 (2022)',
      type: '서양의 역사와 사상',
    },
    {
      title: '프로탄스텐티즘의 윤리와 자본주의 정신',
      author: '막스 베버',
      publisher: '민수출판사 (2022)',
      type: '서양의 역사와 사상',
    },
    {
      title: '프로탄스텐티즘의 윤리와 자본주의 정신',
      author: '막스 베버',
      publisher: '민수출판사 (2022)',
      type: '서양의 역사와 사상',
    },
    {
      title: '프로탄스텐티즘의 윤리와 자본주의 정신',
      author: '막스 베버',
      publisher: '민수출판사 (2022)',
      type: '서양의 역사와 사상',
    },
  ];
  const [text, onChangeText] = React.useState('');
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
        <FlatList
          data={DATA}
          numColumns={2}
          style={{marginBottom: 120 * height}}
          ItemSeparatorComponent={() => <View style={{height: 8 * height}} />}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) =>
            (tagList.includes(item.type) || tagList.length === 0) &&
            (item.title.includes(text) || text === '') ? (
              <BookCard Book={item} key={item.title} />
            ) : null
          }
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
