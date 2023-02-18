import React, {Children, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

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
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },
});
export default Card;
