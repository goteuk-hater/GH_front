import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {scale, width} from '../../../config/globalStyles';
interface propsType {
  classification: string;
  usedScreen?: string;
}

const ClassBox: React.FC<propsType> = props => {
  let classtext;
  if (props.classification === '서양의 역사와 사상') {
    classtext = '서양';
  } else if (props.classification === '동양의 역사와 사상') {
    classtext = '동양';
  } else if (props.classification === '동서양의 문학') {
    classtext = '동서양';
  } else if (props.classification === '과학사') {
    classtext = '과학사';
  } else {
    classtext = '오류';
  }

  return (
    <View style={dstyles(props).classbox}>
      <Text style={styles.text}>{classtext}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 12 * scale,
    fontWeight: 'bold',
  },
});

const dstyles = (props: propsType) =>
  StyleSheet.create({
    classbox: {
      borderRadius: 10 * scale,
      alignSelf: 'flex-start',
      paddingRight: 8 * width,
      paddingLeft: 8 * width,
      paddingTop: props.usedScreen === 'main' ? 4 : 2,
      paddingBottom: props.usedScreen === 'main' ? 4 : 2,
      backgroundColor:
        props.classification === '서양의 역사와 사상'
          ? '#FFAA70'
          : props.classification === '동양의 역사와 사상'
          ? '#59ADF6'
          : props.classification === '동서양의 문학'
          ? '#C780E8'
          : '#3ABD91',
    },
  });

export default ClassBox;
