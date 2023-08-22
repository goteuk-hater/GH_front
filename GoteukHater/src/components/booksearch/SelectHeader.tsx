import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import StyledText from '../globalcomponents/StyledText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TagModal from './TagModal';
import {useCallback, useMemo, useRef, useState} from 'react';
import ClassBox from '../globalcomponents/ClassBox';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SheetHandle from '../globalcomponents/SheetHandle';
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
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => [350 * height], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const modalclose = () => {
    bottomSheetModalRef.current?.close();
  };
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const reset = () => {
    setTagList([]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePresentModalPress}>
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

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        stackBehavior="push"
        handleComponent={SheetHandle}
        onChange={handleSheetChanges}>
        <TagModal
          closeModal={modalclose}
          submit={setTagList}
          tagList={tagList}
          reset={reset}
          title="태그를 선택해 주세요."
        />
      </BottomSheetModal>
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

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
