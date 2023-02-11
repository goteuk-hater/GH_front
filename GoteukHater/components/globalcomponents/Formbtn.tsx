import React, {Children, useState, type PropsWithChildren} from 'react';
import {Text, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Shadow} from 'react-native-shadow-2';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {height, scale, width} from '../../config/globalStyles';
interface FormbtnProps {
  title: string;
  icon: string;
  // calendar, pencil
}
const Formbtn: React.FunctionComponent<FormbtnProps> = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.absolute}>
      <Shadow
        offset={[0, 2]}
        style={styles.reservationbtn}
        distance={1}
        startColor="rgba(172, 180, 162, 0.25)">
        <TouchableOpacity
          style={styles.row}
          onPress={() => setModalVisible(!modalVisible)}>
          <Evillcons
            name={props.icon}
            size={28}
            color="black"
            style={{marginRight: 8 * width}}
          />
          <Text
            style={{color: 'black', fontSize: 16 * scale, fontWeight: '700'}}>
            {props.title}
          </Text>
          <FontAwesome
            name="chevron-right"
            size={12}
            color="black"
            style={{marginLeft: 8}}
          />
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reservationbtn: {
    width: 168 * width,
    height: 44 * height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15 * scale,
    borderColor: '#F6F6F9',
    borderWidth: 1 * width,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16 * width,
    paddingRight: 16 * width,
  },
});
export default Formbtn;
