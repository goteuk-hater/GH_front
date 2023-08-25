import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Card from '../globalcomponents/Card';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';

import StyledText from '../globalcomponents/StyledText';
import ClassBox from '../globalcomponents/ClassBox';
import BookDetailModal from './BookDetailModal';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../../config/RouteName';

interface Book {
  title: string;
  author: string;
  publisher: string;
  type: string;
}
interface Props {
  Book: Book;
}

const BookCard = (props: Props) => {
  const URL = {
    uri: props.Book.image,
  };
  const [isModalVisible, setModalVisible] = React.useState(false);
  const onCancel = () => {
    setModalVisible(false);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation<MainStackParamList['BookInfoScreen']>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookInfoScreen', {book: props.Book});
      }}>
      <Card style={styles.card}>
        <View style={styles.imgbox}>
          <Image
            source={URL}
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
            <ClassBox classification={props.Book.type} usedScreen="main" />
          </View>
          <View>
            <StyledText style={[globalstyles.h2, {textAlign: 'center'}]}>
              {props.Book.title}
            </StyledText>
            <StyledText style={[globalstyles.p1, {textAlign: 'center'}]}>
              {props.Book.author}
            </StyledText>
          </View>
        </View>
      </Card>

      <BookDetailModal
        visible={isModalVisible}
        onCancel={onCancel}
        book={props.Book}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 172 * width,
    marginRight: 14 * width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16 * scale,
  },
  imgbox: {
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
