import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {height, scale, width} from '../../config/globalStyles';
import Card from '../globalcomponents/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyledText from '../globalcomponents/StyledText';
interface Propstype {
  time: string;
  maxnumber: number;
  nownumber: number;
}
const TimeselectCard: React.FC<Propstype> = props => {
  const FullBox = () => (
    <View style={[styles.timebox, styles.full]}>
      <Ionicons
        name={'alarm-outline'}
        size={16}
        color="white"
        style={{marginRight: 4 * scale}}
      />
      <StyledText style={styles.time}>{props.time}</StyledText>
    </View>
  );
  const Box = () => (
    <View style={[styles.timebox]}>
      <StyledText style={styles.time}>{props.time}</StyledText>
    </View>
  );

  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        {props.maxnumber === props.nownumber ? <FullBox /> : <Box />}
        <StyledText style={styles.numinfo}>
          {props.nownumber}명 / {props.maxnumber}명
        </StyledText>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    width: 114 * scale,
    marginBottom: 16 * scale,
  },
  timebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30 * scale,
    borderTopLeftRadius: 15 * scale,
    borderTopRightRadius: 15 * scale,
    padding: 8 * scale,
    backgroundColor: '#20B358',
  },
  full: {
    backgroundColor: '#FF6961',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: 'white',
    fontWeight: '700',
  },
  numinfo: {
    textAlign: 'center',
    fontSize: 10 * scale,
    fontWeight: '700',
    color: '#8B8B8B',
    margin: 4 * scale,
  },
});
export default TimeselectCard;
