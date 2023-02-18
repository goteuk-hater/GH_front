import React, {Children, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {height, scale, width} from '../../config/globalStyles';

interface propsType {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Card: React.FunctionComponent<propsType> = props => {
  return (
    <Shadow
      style={[styles.container, props.style]}
      offset={[0, 2]}
      distance={1}
      startColor="rgba(172, 180, 162, 0.25)">
      {props.children}
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 12 * height,
    paddingLeft: 12 * width,
    paddingRight: 12 * width,
    paddingBottom: 12 * height,
    borderRadius: 15 * scale,
    marginRight: 8 * width,
    marginBottom: 8 * height,
    justifyContent: 'center',
  },
});
export default Card;
