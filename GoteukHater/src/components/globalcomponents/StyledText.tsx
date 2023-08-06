import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle, Platform} from 'react-native';

interface propsType {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}
const StyledText: React.FunctionComponent<propsType> = props => {
  return (
    <Text {...props} numberOfLines={1} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
export default StyledText;
