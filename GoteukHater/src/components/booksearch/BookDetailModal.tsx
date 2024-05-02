import {
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyledText from '../global/StyledText';
import {Book} from '../../config/Type';

interface Props {
  book: Book;
  visible: boolean;
  onCancel: () => void;
}

const BookDetailModal = (props: Props) => {
  const URL = {
    uri: 'https://classic.sejong.ac.kr/home/book/book_03.jpg',
  };
  const book = props.book;
  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.modalBackground} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.modalheader}>
          <TouchableOpacity onPress={props.onCancel}>
            <FontAwesome name="close" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalcontent}>
          <Image source={URL} style={styles.img} resizeMode="cover" />
          <View style={styles.modalbody}>
            <StyledText style={[globalStyle.p1, {color: 'gray'}]}>
              {book.category.category}
            </StyledText>
            <StyledText style={globalStyle.h2}>{book.title}</StyledText>
            <StyledText style={globalStyle.h3}>{book.author}</StyledText>
            <StyledText style={globalStyle.p2}>{book.publisher}</StyledText>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default BookDetailModal;
const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
  },
  img: {
    height: 300 * height,
    width: 200 * width,
    borderWidth: 2 * scale,
    borderColor: '#E5E5E5',
  },
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 172 * height,
    left: 26 * width,
    width: 338 * width,
    height: 473 * height,
    borderRadius: 16 * scale,
    padding: 16 * scale,
    paddingBottom: 15 * scale,
    rowGap: 8 * height,
  },
  modalcontent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    rowGap: 16 * height,
  },
  modalheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalbody: {
    alignItems: 'center',
    rowGap: 4 * height,
  },
});
