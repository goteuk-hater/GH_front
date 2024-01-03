import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyle, height, scale} from '@/config/globalStyle';
import Card from '../../global/Card';
import StyledText from '../../global/StyledText';
interface LinkCardProps {
  onPress?: () => void;
  title: string;
  text: string;
}
const LinkCard: React.FC<LinkCardProps> = ({onPress, title, text}) => {
  return (
    <Card style={{width: '100%', height: 75 * height}}>
      <TouchableOpacity onPress={onPress}>
        <StyledText style={styles.linkTitle}>{title}</StyledText>
        <StyledText style={styles.linkText}>{text}</StyledText>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  linkTitle: {
    ...globalStyle.h3,
    marginBottom: 2 * height,
  },
  linkText: {
    color: '#8B8B8B',
    ...globalStyle.h5,
  },
});
export default LinkCard;
