import {
  Modal,
  ScrollView,
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
  setState: (state: string) => void;
  list: string[];
  title: string;
  selected: string;
}
interface TagbtnProps {
  title: string;
  selected: string;
}

const BooksearchModal = ({
  closeModal,
  setState,
  list,
  title,
  selected,
}: Props) => {
  const TagBtn = ({title}: TagbtnProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setState(title);
        }}>
        <View style={styles.tag}>
          <StyledText
            style={[
              styles.modalText,
              {
                color: selected === title ? '#FF6961' : '#000000',
              },
            ]}>
            {title}
          </StyledText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.modalView}>
      <View style={[globalStyle.row_space_between, styles.title]}>
        <StyledText style={globalStyle.h1}>{title}</StyledText>
      </View>
      <ScrollView>
        <View style={styles.tagContainer}>
          {list.map((tag, index) => {
            return <TagBtn key={index} title={tag} selected={selected} />;
          })}
        </View>
      </ScrollView>
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
    marginBottom: 40 * height,
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
  title: {
    borderBottomWidth: 1 * height,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 14 * height,
  },
});
export default BooksearchModal;
