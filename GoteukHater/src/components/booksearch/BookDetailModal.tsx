import {
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import StyledText from '../globalcomponents/StyledText';
import {onClose} from 'react-native-actions-sheet-picker';
interface Props {
  book: Book;
  visible: boolean;
  onCancel: () => void;
}
interface Book {
  title: string;
  author: string;
  publisher: string;
  type: string;
}
const BookDetailModal = (props: Props) => {
  const URL = {
    uri: 'https://classic.sejong.ac.kr/home/book/book_01.jpg',
  };

  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={props.onCancel}>
        <View style={styles.modalBackground} />
      </TouchableWithoutFeedback>
      <View style={styles.modalcontent}>
        <View style={styles.modalheader}>
          <TouchableOpacity onPress={props.onCancel}>
            <EvilIcons name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          source={URL}
          style={{
            height: 300 * height,
            width: 200 * width,
            borderWidth: 1 * scale,
            borderColor: '#E5E5E5',
          }}
        />
        <StyledText>{props.book.type}</StyledText>
        <View style={styles.modalbody}>
          <StyledText style={globalstyles.h2}>{props.book.title}</StyledText>
          <StyledText style={globalstyles.h3}>{props.book.author}</StyledText>
          <StyledText style={[globalstyles.p2, {marginTop: 8 * height}]}>
            {props.book.publisher}
          </StyledText>
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
  modalcontent: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 128 * height,
    left: 18 * width,
    width: 354 * width,
    height: 550 * height,
    borderRadius: 16 * scale,
    padding: 8 * scale,
    paddingBottom: 15 * scale,
    alignItems: 'center',
    rowGap: 20 * height,
  },
  modalheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 8 * width,
    paddingTop: 8 * height,
  },
  modalbody: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8 * height,
  },
});
