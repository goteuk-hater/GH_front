import React, {Children, type PropsWithChildren} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  TextChild,
  TextProps,
} from 'react-native-svg/lib/typescript/lib/extract/extractText';
import {height, scale, width} from '../../config/globalStyles';

interface propsType {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}
const StyledText: React.FunctionComponent<propsType> = props => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'SUITVariable-Regular',
  },
});
export default StyledText;
