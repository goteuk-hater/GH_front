import {StyleSheet, View} from 'react-native';
import {QAcomponent} from './QAcomponent';
import {height, width} from '../../../config/globalStyles';
const data = [1, 2, 3, 4];
export const QAlist = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return <QAcomponent key={index} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 4 * height,
  },
});
