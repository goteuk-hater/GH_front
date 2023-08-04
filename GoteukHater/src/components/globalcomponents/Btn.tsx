import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, height, scale, width} from '../../../config/globalStyles';
import StyledText from './StyledText';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface BtnProps {
  title?: string;
  onPress?: () => void;
  Icon?: string;
  color?: string;
  // chevron-back
  // chevron-forward
  // chevron-down
}
const Btn = (props: BtnProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <View>
        {props.title ? (
          <StyledText
            style={[
              globalstyles.h3,
              {color: '#007AFF', marginHorizontal: 5 * scale},
            ]}>
            {props.title}
          </StyledText>
        ) : (
          <></>
        )}
        {props.Icon ? (
          <Ionicons
            name={props.Icon}
            size={30 * scale}
            color={props.color ? props.color : '#B5B5B5'}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Btn;
