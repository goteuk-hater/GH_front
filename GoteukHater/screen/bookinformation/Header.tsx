import FlexView from '../../components/globalcomponents/FlexView';
import StyledText from '../../components/globalcomponents/StyledText';
import {globalstyles, height, scale, width} from '../../config/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
interface Props {
  title: string;
  back?: () => void;
  next?: any;
  nextText?: string;
}
const Header = (props: Props) => {
  const BackBtn = () => {
    return (
      <>
        {props.back ? (
          <TouchableOpacity onPress={props.back} style={styles.btnbox}>
            <Ionicons
              name={'chevron-back'}
              size={24 * scale}
              color="#007AFF"
              style={{paddingTop: 4 * scale}}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.btnbox} />
        )}
      </>
    );
  };
  const NextBtn = () => {
    return (
      <>
        {props.next ? (
          <TouchableOpacity onPress={props.next} style={styles.btnbox}>
            {props.nextText ? (
              <StyledText style={[globalstyles.h2, styles.btntext]}>
                {props.nextText}
              </StyledText>
            ) : (
              <Ionicons
                name={'chevron-forward'}
                size={24 * scale}
                color="#007AFF"
                style={{paddingTop: 4 * scale}}
              />
            )}
          </TouchableOpacity>
        ) : (
          <View style={styles.btnbox} />
        )}
      </>
    );
  };

  return (
    <View style={styles.headercontainer}>
      <BackBtn />
      <StyledText style={[globalstyles.h1, styles.margin]}>
        {props.title}
      </StyledText>
      <NextBtn />
    </View>
  );
};
const styles = StyleSheet.create({
  btnbox: {
    width: 35 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: '#007AFF',
  },
  margin: {
    marginLeft: 100 * width,
    marginRight: 100 * width,
  },
  headercontainer: {
    paddingTop: 4 * height,
    paddingBottom: 8 * height,
    paddingHorizontal: 8 * width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 2 * height,
    borderBottomWidth: 1 * scale,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#F6F6F9',
  },
});
export default Header;
