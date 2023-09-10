import React, {type PropsWithChildren} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Platform, StatusBar} from 'react-native';
import SplashScreen from './SplashScreen';
import Login from './login/Login';
import Home from './main/Home';
import NestPage from './main/NestPage';
type RootStackParamList = {
  Login: undefined;
  SplashScreen: undefined;
  NestPage: undefined;
  Home: undefined;
};
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
const Stack = createStackNavigator<RootStackParamList>();
const Root = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          </Stack.Group>
          {/* 로그인 */}
          <Stack.Group>
            <Stack.Screen
              name="NestPage"
              component={NestPage}
              options={{headerShown: false, gestureEnabled: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </Stack.Group>
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};
export default Root;
