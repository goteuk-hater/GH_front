import {NavigationProp, NavigationState} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../globalcomponents/Card';
interface LinkCardProps {
  navigation: NavigationProp<NavigationState>;
  title: string;
  text: string;
  link: string;
}
const LinkCard: React.FunctionComponent<LinkCardProps> = props => {
  return (
    <Card
      style={{width: '100%', height: 75}}
      children={
        <TouchableOpacity
          onPress={() => props.navigation.navigate(props.link as never)}>
          <Text style={styles.linktitle}>{props.title}</Text>
          <Text style={styles.linktext}>{props.text}</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  linktitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  linktext: {
    color: '#8B8B8B',
    fontSize: 12,
    fontWeight: '700',
  },
});
export default LinkCard;
