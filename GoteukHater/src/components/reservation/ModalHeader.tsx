import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {globalstyles, height} from '../../../config/globalStyles';
import Btn from '../globalcomponents/Btn';
import FlexView from '../globalcomponents/FlexView';
import StyledText from '../globalcomponents/StyledText';
interface ModalHeaderProps {
  backIcon?: string;
  nextIcon?: string;
  back?: () => void;
  next?: () => void;
  title: string;
}
export const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <FlexView style={[styles.container]}>
      {props.backIcon ? (
        <Btn Icon={props.backIcon} onPress={props.back} />
      ) : null}
      <StyledText style={globalstyles.h1}>{props.title}</StyledText>

      {props.nextIcon ? (
        <Btn Icon={props.nextIcon} onPress={props.next} />
      ) : null}
    </FlexView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10 * height,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});
