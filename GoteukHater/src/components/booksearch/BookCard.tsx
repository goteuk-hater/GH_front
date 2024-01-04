import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Card from '../global/Card';
import {globalStyle, height, scale, width} from '@/config/globalStyle';

import StyledText from '../global/StyledText';
import ClassBox from '../global/ClassBox';
import BookDetailModal from './BookDetailModal';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Book, MainStackParamList} from '@/config/Type';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';

interface Props {
  Book: Book;
}

const BookCard = (props: Props) => {
  const url = {
    uri: props.Book.image_url,
  };
  const [isModalVisible, setModalVisible] = React.useState(false);
  const onCancel = () => {
    setModalVisible(false);
  };

  const {dismiss} = useBottomSheetModal();
  const navigation = useNavigation<MainStackParamList['BookSearchScreen']>();
  const book = props.Book;
  console.log(book.title);
  return (
    <TouchableOpacity
      onPress={() => {
        dismiss();
        navigation.navigate('BookInfoScreen', {
          book,
        });
      }}>
      <Card style={styles.card}>
        <View style={styles.imgBox}>
          <Image
            source={url}
            style={{
              height: 180 * height,
              width: 120 * width,
              marginBottom: 4 * height,
              borderWidth: 1,
              borderColor: '#E5E5E5',
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textbox}>
          <View>
            <ClassBox
              classification={book.category.category}
              usedScreen="main"
            />
          </View>
          <View>
            <StyledText style={[globalStyle.h2, {textAlign: 'center'}]}>
              {book.title}
            </StyledText>
            <StyledText style={[globalStyle.p1, {textAlign: 'center'}]}>
              {book.author}
            </StyledText>
          </View>
        </View>
      </Card>

      <BookDetailModal
        visible={isModalVisible}
        onCancel={onCancel}
        book={book}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 172 * width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16 * scale,
  },
  imgBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 4 * height,
  },
});

export default BookCard;
