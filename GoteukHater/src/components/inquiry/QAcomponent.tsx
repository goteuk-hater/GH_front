import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '../global/StyledText';
import {globalStyle, scale, width} from '@/config/globalStyle';
import Card from '../global/Card';

import AntDesign from 'react-native-vector-icons/AntDesign';
export const QAcomponent = ({tag, title, content}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card style={styles.container}>
      <TouchableOpacity
        style={globalStyle.row_space_between}
        onPress={() => {
          setOpen(!open);
        }}>
        <View style={[globalStyle.row, {columnGap: 4 * width}]}>
          <StyledText style={styles.type}>[{tag}]</StyledText>
          <StyledText style={styles.title}>{title}</StyledText>
        </View>

        <AntDesign
          name={open ? 'up' : 'down'}
          size={13 * scale}
          color="#8B8B8B"
        />
      </TouchableOpacity>
      {open && (
        <StyledText
          style={[
            globalStyle.p1,
            {
              color: '#8B8B8B',
            },
          ]}
          line={Infinity}>
          {content}
        </StyledText>
      )}
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  type: {
    color: '#D8808A',
    ...globalStyle.h4,
  },
  title: {
    ...globalStyle.h4,
    color: 'black',
  },
});
