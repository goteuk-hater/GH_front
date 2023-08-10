import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {type PropsWithChildren} from 'react';

import BookSearchScreen from '../bookinformation/BookSearchScreen';
import BookInfoScreen from '../bookinformation/BookInfoScreen';
import BookingListScreen from '../bookinglist/BookingListScreen';
import Main from './Main';
import {globalstyles, scale, width} from '../../../config/globalStyles';
import StyledText from '../../components/globalcomponents/StyledText';

import Btn from '../../components/globalcomponents/Btn';
import {MainStackParamList} from '../../../config/RouteName';
import {isAndroid} from 'react-native-calendars/src/expandableCalendar/commons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ExamMainScreen from '../examdata/ExamMainScreen';
import {Platform} from 'react-native';

const Home = () => {
  const Stack = createStackNavigator<MainStackParamList>();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTitleAlign: 'center',
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
            headerTitle: () => (
              <StyledText style={globalstyles.h2}>나의 신청현황</StyledText>
            ),
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  navigation.navigate('Main' as never);
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
              <StyledText style={globalstyles.h2}>
                고전도서 정보 게시판
              </StyledText>
            ),
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  navigation.navigate('Main' as never);
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="BookInfoScreen"
          component={BookInfoScreen}
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
                  navigation.navigate('BookSearchScreen' as never);
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ExamMainScreen"
          component={ExamMainScreen}
          options={{
            title: '라우팅',
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  navigation.navigate('Main' as never);
                }}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default Home;
