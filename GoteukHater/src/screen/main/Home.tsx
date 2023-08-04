import {createStackNavigator} from '@react-navigation/stack';
import React, {type PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BookSearchScreen from '../bookinformation/BookSearchScreen';
import BookInfoScreen from '../bookinformation/BookInfoScreen';
import BookingListScreen from '../bookinglist/BookingListScreen';
import ExamMainScreen from '../examdata/ExamMainScreen';
import Main from './Main';
import {globalstyles, scale, width} from '../../../config/globalStyles';
import {HeaderTitle} from '@react-navigation/elements';
import StyledText from '../../components/globalcomponents/StyledText';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Formbtn from '../../components/Modal/Formbtn';
import {
  NavigationContainer,
  NavigationProp,
  NavigationState,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BtnScreen from '../reservationscreen/BtnScreen';
import ReservationHome from '../reservationscreen/ReservationHome';
import Btn from '../../components/globalcomponents/Btn';
import {MainStackParamList} from '../../../config/RouteName';

const Home = (props: any) => {
  interface Props {
    navigation: NavigationProp<NavigationState>;
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  }

  const Stack = createStackNavigator<MainStackParamList>();
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const modalclose = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookingListScreen"
          component={BookingListScreen}
          options={{
            title: '나의 신청현황',
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  props.navigation.navigate('Main' as never);
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="BookSearchScreen"
          component={BookSearchScreen}
          options={{
            headerTitle: () => (
              <StyledText style={globalstyles.h1}>
                고전도서 정보 게시판
              </StyledText>
            ),
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  props.navigation.navigate('Main' as never);
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="BookInfoScreen"
          component={BookInfoScreen}
          options={{
            title: 'dd',
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  props.navigation.navigate('BookSearchScreen' as never);
                }}
              />
            ),
          }}
        />
        {/* <Stack.Screen
          name="ExamMainScreen"
          component={ExamMainScreen}
          options={{
            title: '라우팅',
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  props.navigation.navigate('Main' as never);
                }}
              />
            ),
          }}
        /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default Home;
