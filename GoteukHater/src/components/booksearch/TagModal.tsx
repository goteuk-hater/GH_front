import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import SheetHandle from '../globalcomponents/SheetHandle';
import StyledText from '../globalcomponents/StyledText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {addTag, selectTag} from '../../redux/reducer/tagSlice';
import {useEffect, useState} from 'react';
interface Props {
  visible: boolean;
  closeModal: () => void;
  submit: (tagList: string[]) => void;
  tagList: string[];
}
interface TagbtnProps {
  title: string;
}

const TagModal = ({visible, closeModal, submit, tagList}: Props) => {
  const tag = [
    '동양의 역사와 사상',
    '서양의 역사와 사상',
    '동서양의 문학',
    '과학사',
  ];
  const submitfunction = () => {
    submit(newtagList);
    closeModal();
  };
  const [newtagList, setNewTagList] = useState<string[]>(tagList);
  useEffect(() => {
    setNewTagList(tagList);
  }, [tagList]);
  const TagBtn = ({title}: TagbtnProps) => {
    const togglefunction = () => {
      if (newtagList.includes(title)) {
        let newtagList2 = [...newtagList];
        newtagList2.splice(newtagList2.indexOf(title), 1);
        setNewTagList(newtagList2);
      } else {
        let newtagList2 = [...newtagList];
        newtagList2.push(title);
        setNewTagList(newtagList2);
      }
    };
    return (
      <TouchableOpacity onPress={togglefunction}>
        <View style={styles.tag}>
          {newtagList.includes(title) ? (
            <FontAwesome name="check-square-o" size={20} color="black" />
          ) : (
            <FontAwesome name="square-o" size={20} color="black" />
          )}
          <StyledText style={styles.modalText}>{title}</StyledText>
        </View>
      </TouchableOpacity>
    );
  };
  const SubmitBtn = () => {
    return (
      <TouchableOpacity style={styles.btn} onPress={submitfunction}>
        <StyledText style={styles.modalText}>확인</StyledText>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}>
      <View style={styles.container}>
        <View style={[styles.modalView, {rowGap: 20 * height}]}>
          <StyledText style={globalstyles.h1}>태그를 선택해 주세요.</StyledText>
          <View style={styles.tagContainer}>
            {tag.map((tag, index) => {
              return <TagBtn key={index} title={tag} />;
            })}
          </View>
          <View style={styles.btnbox}>
            <SubmitBtn />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    top: '60%',
    height: '40%',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderTopLeftRadius: 20 * scale,
    borderTopRightRadius: 20 * scale,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
    ...globalstyles.h3,
  },
  tagContainer: {
    rowGap: 20 * height,
  },
  tag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10 * width,
  },
  btnbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 300 * width,
    height: 50 * height,
    backgroundColor: '#FF533A',
    borderRadius: 10 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TagModal;
