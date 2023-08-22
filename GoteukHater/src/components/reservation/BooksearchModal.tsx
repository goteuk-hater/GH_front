import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import SheetHandle from '../globalcomponents/SheetHandle';
import StyledText from '../globalcomponents/StyledText';
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
                color: selected === title ? '#FF533A' : '#000000',
              },
            ]}>
            {selected === title ? (
              <FontAwesome name="check" size={14 * scale} color="#FF533A" />
            ) : null}
            {title}
          </StyledText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.modalView, {rowGap: 20 * height}]}>
      <View style={globalstyles.row_spacebetween}>
        <StyledText style={globalstyles.h1}>{title}</StyledText>
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
    padding: 20 * scale,
  },
  modalText: {
    ...globalstyles.h3,
  },
  tagContainer: {
    rowGap: 20 * height,
  },
  tag: {
    flexDirection: 'row',
    columnGap: 10 * width,
    alignItems: 'center',
  },
});
export default BooksearchModal;
