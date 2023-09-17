import {NavigationProp, NavigationState} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalstyles, height, scale} from '../../../../config/globalStyles';
import Card from '../../globalcomponents/Card';
import StyledText from '../../globalcomponents/StyledText';
interface LinkCardProps {
  navigation: NavigationProp<NavigationState>;
  title: string;
  text: string;
  link: string;
}
const LinkCard: React.FC<LinkCardProps> = props => {
  return (
    <Card style={{width: '100%', height: 75 * height}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(props.link as never)}>
        <StyledText style={styles.linktitle}>{props.title}</StyledText>
        <StyledText style={styles.linktext}>{props.text}</StyledText>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  linktitle: {
    ...globalstyles.h3,
    marginBottom: 2 * height,
  },
  linktext: {
    color: '#8B8B8B',
    ...globalstyles.h5,
  },
});
export default LinkCard;
