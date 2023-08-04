import {NavigationProp, NavigationState} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
interface Props {
  navigation: NavigationProp<NavigationState>;
}
const SplashScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login' as never)}
      />
      <Button
        title="NestPage"
        onPress={() => navigation.navigate('NestPage' as never)}
      />
    </View>
  );
};
export default SplashScreen;
