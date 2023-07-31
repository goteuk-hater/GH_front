import React, {Children} from 'react';
import {StyleSheet, StyleProp, ViewStyle, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Svg} from 'react-native-svg';
import {height, scale, width} from '../../config/globalStyles';
import FlexView from './FlexView';

interface propsType {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Card = (props: propsType) => {
  const child = Children.toArray(props.children);
  return (
    <Shadow
      style={[styles.card, props.style]}
      offset={[0, 2]}
      distance={1}
      startColor="rgba(172, 180, 162, 0.25)">
      <FlexView gapVertical={8 * height}>{child}</FlexView>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12 * scale,
    borderRadius: 15 * scale,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: 4 * height,
  },
});
export default Card;
