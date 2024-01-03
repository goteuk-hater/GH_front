import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from './SplashScreen';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RootStackParamList} from '@/config/Type';
import HomePage from './main/HomePage';
import Login from './login/Login';
const Stack = createStackNavigator<RootStackParamList>();
const Root = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}>
          <Stack.Group>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};
export default Root;
