import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle, Platform} from 'react-native';

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
    flexShrink: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'SUITVariable-Regular',
      },
    }),
  },
});
export default StyledText;
