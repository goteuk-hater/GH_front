import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle, height, scale, width} from '@/config/globalStyle';
import StyledText from '../global/StyledText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TagModal from './TagModal';
import {useCallback, useMemo, useRef, useState} from 'react';
import ClassBox from '../global/ClassBox';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SheetHandle from '../global/SheetHandle';
interface PropsType {
  tagList: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  setTagList: (tagList: string[]) => void;
}

export const SelectHeader = ({
  tagList,
  addTag,
  removeTag,
  setTagList,
}: PropsType) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => [350 * height], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    Keyboard.dismiss();
    bottomSheetModalRef.current?.present();
  }, []);
  const modalclose = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <View style={styles.modalbtn}>
          <StyledText style={[globalStyle.h4]}>
            영역 <AntDesign name="caretdown" size={14 * scale} color="black" />
          </StyledText>
        </View>
      </TouchableOpacity>
      {tagList.map((tag, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              removeTag(tag);
            }}
            key={index}>
            <ClassBox classification={tag} usedScreen="main" />
          </TouchableOpacity>
        );
      })}

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        stackBehavior="push"
        handleComponent={SheetHandle}>
        <TagModal
          closeModal={modalclose}
          submit={setTagList}
          tagList={tagList}
          title="태그를 선택해 주세요."
        />
      </BottomSheetModal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...globalStyle.row,
    columnGap: 8 * width,
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  modalbtn: {
    ...globalStyle.row,
    paddingVertical: 4 * height,
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
