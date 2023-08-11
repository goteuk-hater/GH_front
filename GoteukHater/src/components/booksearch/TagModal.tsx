import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalstyles, height, scale} from '../../../config/globalStyles';
import StyledText from '../globalcomponents/StyledText';

interface Props {
  visible: boolean;
  addTag: (tag: string) => void;
}
const Tag = [
  '서양의 역사와 사상',
  '동양의 역사와 사상',
  '동서양의 문학',
  '과학사',
];
const TagModal = ({visible, addTag}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => addTag('')}>
      <TouchableWithoutFeedback onPress={() => addTag('')}>
        <View style={styles.centeredView} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={[styles.modalView, {rowGap: 20 * height}]}>
          <StyledText style={globalstyles.h1}>태그를 선택해 주세요.</StyledText>
          <View style={styles.tagContainer}>
            {Tag.map((tag, index) => (
              <TouchableOpacity
                key={index}
                style={styles.tag}
                onPress={() => addTag(tag)}>
                <StyledText style={styles.tagText}>{tag}</StyledText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20 * scale,
    borderTopRightRadius: 20 * scale,
    padding: 20 * scale,
    width: '100%',
    height: '100%',
  },
  modalText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F6F6F9',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
export default TagModal;
