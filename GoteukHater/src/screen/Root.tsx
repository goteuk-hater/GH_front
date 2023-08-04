import React, {type PropsWithChildren} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StatusBar} from 'react-native';
import SplashScreen from './SplashScreen';
import Login from './login/Login';
import Home from './main/Home';
import Formbtn from '../components/Modal/Formbtn';
import BtnScreen from './reservationscreen/BtnScreen';
import {AlertModal} from '../components/Modal/AlertModal';
import ModalButton from '../components/Modal/ModalButton';
import Test from './main/Test';
import NestPage from './main/Test';
type RootStackParamList = {
  Login: undefined;
  SplashScreen: undefined;
  NestPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Root = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="NestPage"
            component={NestPage}
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
export default Root;
