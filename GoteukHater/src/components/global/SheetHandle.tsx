import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
const RADIUS = 24;
const SheetHandle: FC = () => {
  const sides = {
    top: true,
    bottom: false,
    start: true,
    end: true,
  };
  const corners = {
    topStart: true,
    topEnd: true,
    bottomStart: false,
    bottomEnd: false,
  };
  return (
    <Shadow sides={sides} corners={corners} style={styles.shadowContainer}>
      <View style={styles.handleContainer}>
        <View style={styles.handle} />
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
  },
  handleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
  },
  handle: {
    width: 30,
    height: 4,
    backgroundColor: 'gray',
    borderRadius: 4,
  },
});

export default SheetHandle;
