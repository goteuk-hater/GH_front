import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, scale} from '../../../config/globalStyles';
import StyledText from './StyledText';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface BtnProps {
  title?: string;
  onPress?: () => void;
  Icon?: string;
  // chevron-back
  // chevron-forward
}
const Btn = (props: BtnProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      {props.title ? (
        <StyledText style={[globalstyles.h1, {color: '#007AFF'}]}>
          {props.title}
        </StyledText>
      ) : (
        <></>
      )}
      {props.Icon ? (
        <Ionicons name={props.Icon} size={30 * scale} color="#B5B5B5" />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Btn;
