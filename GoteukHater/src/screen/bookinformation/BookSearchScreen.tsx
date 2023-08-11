import React, {type PropsWithChildren} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinbkedBookCard from '../../components/booksearch/LinkedBookCard';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {ScreenStackHeaderSubview} from 'react-native-screens';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import {SafeAreaView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../../components/globalcomponents/Card';
import BookCard from '../../components/booksearch/BookCard';
import StyledText from '../../components/globalcomponents/StyledText';
import {Picker} from '@react-native-picker/picker';
import TagModal from '../../components/booksearch/TagModal';

interface propsType {
  navigation: NavigationProp<NavigationState>;
}

const BookSearchScreen: React.FC<propsType> = props => {
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [tagList, setTagList] = React.useState([] as Array<string>);
  const addtag = (tag: string) => {
    if (tag == '') {
      setModalVisible(false);
      return;
    }
    let newtagList = [...tagList];
    newtagList.push(tag);
    setTagList(newtagList);
    setModalVisible(false);
  };
  const removetag = (index: number) => {
    let newtagList = [...tagList];
    newtagList.splice(index, 1);
    setTagList(newtagList);
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ScrollView horizontal={true}>
          {tagList.map((tag, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: '#E5E5E5',
                borderRadius: 10 * scale,
                padding: 10 * scale,
                marginRight: 4 * scale,
              }}
              onPress={tag => {
                removetag(index);
              }}>
              <StyledText style={globalstyles.p2}>{tag}</StyledText>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={[globalstyles.row, {columnGap: 4 * width}]}
          onPress={() => {
            setModalVisible(true);
          }}>
          <StyledText style={globalstyles.h4}>영역</StyledText>
          <AntDesign name="down" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <TagModal visible={modalVisible} addTag={addtag} />
      <View style={globalstyles.row_spacebetween}>
        <FlatList
          data={DATA}
          numColumns={2}
          style={{marginBottom: 120 * height}}
          ItemSeparatorComponent={() => <View style={{height: 8 * height}} />}
          renderItem={({item, index}) =>
            (tagList.includes(item.type as unknown as {name: string}) ||
              tagList.length === 0) &&
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
    rowGap: 20 * height,
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
