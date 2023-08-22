import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import StyledText from '../../components/globalcomponents/StyledText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TagModal from '../../components/booksearch/TagModal';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {addTag, removeTag, selectTag} from '../../redux/reducer/tagSlice';
import ClassBox from '../../components/globalcomponents/ClassBox';
import {add} from 'react-native-reanimated';
interface PropsType {
  tagList: string[];
  addtag: (tag: string) => void;
  removetag: (tag: string) => void;
  setTagList: (tagList: string[]) => void;
}

export const SelectHeader = ({
  tagList,
  addtag,
  removetag,
  setTagList,
}: PropsType) => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <View style={styles.modalbtn}>
          <StyledText style={[globalstyles.h4]}>
            영역 <AntDesign name="caretdown" size={14 * scale} color="black" />
          </StyledText>
        </View>
      </TouchableOpacity>
      {tagList.map((tag, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              removetag(tag);
            }}
            key={index}>
            <ClassBox classification={tag} usedScreen="main" />
          </TouchableOpacity>
        );
      })}
      <TagModal
        visible={modalVisible}
        closeModal={closeModal}
        submit={setTagList}
        tagList={tagList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalstyles.row,
    columnGap: 8 * width,
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  modalbtn: {
    ...globalstyles.row,
    paddingVertical: 4 * height,
    alignItems: 'center',
  },
});
