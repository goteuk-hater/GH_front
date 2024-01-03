import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import SheetHandle from '../global/SheetHandle';
import StyledText from '../global/StyledText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useEffect, useState} from 'react';
interface Props {
  closeModal: () => void;
  submit: (tagList: string[]) => void;
  tagList: string[];
  title: string;
}
interface TagbtnProps {
  title: string;
}

const TagModal = ({closeModal, submit, tagList, title}: Props) => {
  const tag = [
    '서양의 역사와 사상',
    '동양의 역사와 사상',
    '동서양의 문학',
    '과학 사상',
  ];
  const submitfunction = () => {
    submit(newtagList);
    closeModal();
  };
  const [newtagList, setNewTagList] = useState<string[]>(tagList);
  useEffect(() => {
    setNewTagList(tagList);
  }, [tagList]);
  const reset = () => {
    setNewTagList([]);
  };
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
          <StyledText style={styles.modalText}>
            {newtagList.includes(title) ? (
              <FontAwesome
                name="check-square-o"
                size={16 * scale}
                color="black"
              />
            ) : (
              <FontAwesome name="square-o" size={16 * scale} color="black" />
            )}
            {'  '}
            {title}
          </StyledText>
        </View>
      </TouchableOpacity>
    );
  };
  interface SubmitBtnProps {
    fn?: () => void;
    content: string;
  }
  const SubmitBtn = ({fn, content}: SubmitBtnProps) => {
    let btnstyle,
      textstyle = styles.btntext;
    content === '적용' ? (btnstyle = styles.btn) : (btnstyle = styles.closebtn);
    return (
      <TouchableOpacity style={btnstyle} onPress={fn}>
        <StyledText style={textstyle}>{content}</StyledText>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.modalView}>
      <View style={[globalStyle.row_space_between, styles.title]}>
        <StyledText style={globalStyle.h1}>{title}</StyledText>
      </View>
      <View style={styles.tagContainer}>
        {tag.map((tag, index) => {
          return <TagBtn key={index} title={tag} />;
        })}
      </View>
      <View style={styles.btnbox}>
        <SubmitBtn fn={reset} content="초기화" />
        <SubmitBtn fn={submitfunction} content="적용" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20 * scale,
    borderTopRightRadius: 20 * scale,
    paddingHorizontal: 20 * width,
    rowGap: 14 * height,
  },
  modalText: {
    ...globalStyle.h3,
  },
  tagContainer: {
    rowGap: 20 * height,
  },
  tag: {
    flexDirection: 'row',
    columnGap: 10 * width,
    alignItems: 'center',
  },
  btnbox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: 180 * width,
    height: 50 * height,
    backgroundColor: '#209edd',
    borderRadius: 10 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closebtn: {
    width: 140 * width,
    height: 50 * height,
    backgroundColor: '#bbbaba',
    borderRadius: 10 * scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    ...globalStyle.h2,
    letterSpacing: 3 * width,
    color: '#FFFFFF',
  },
  title: {
    borderBottomWidth: 1 * height,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 14 * height,
  },
});
export default TagModal;
