import React, {Children, type PropsWithChildren} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {height, scale, width} from '../../config/globalStyles';

interface propsType {
  content: string;
  style?: StyleProp<TextStyle>;
}
const StyledText: React.FunctionComponent<propsType> = props => {
  return <Text style={[styles.text, props.style]}>{props.content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'SUITVariable-Regular',
  },
});
export default StyledText;
