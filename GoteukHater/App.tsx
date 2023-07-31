import React, {type PropsWithChildren} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screen/main/Home';
import Login from './screen/login/Login';
import SplashScreen from './screen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StatusBar} from 'react-native';
import Formbtn from './components/Modal/Formbtn';
import ReservationHome from './screen/reservationscreen/ReservationHome';
import {SafeAreaView} from 'react-native-safe-area-context';
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SplashScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />

      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false, gestureEnabled: false}}
          />
        </Stack.Group>
        {/* 로그인 */}
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
