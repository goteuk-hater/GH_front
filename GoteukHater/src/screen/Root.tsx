import React, {type PropsWithChildren} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from './SplashScreen';
import Login from './login/Login';
import NestPage from './main/NestPage';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RootStackParamList} from '../../config/Type';
const Stack = createStackNavigator<RootStackParamList>();
const Root = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false, gestureEnabled: false}}
            />
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
              options={{headerShown: false, gestureEnabled: false}}
            />
          </Stack.Group>
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};
export default Root;
