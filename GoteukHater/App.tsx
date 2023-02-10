import React, {type PropsWithChildren} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screen/main/Home';
import Login from './screen/login/Login';
import SplashScreen from './screen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SplashScreen: undefined;
};
type RootProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;
const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
