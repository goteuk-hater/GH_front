import {createStackNavigator} from '@react-navigation/stack';
import React, {type PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import BookSearchScreen from '../bookinformation/BookSearchScreen';
import BookInfoScreen from '../bookinformation/BookInfoScreen';
import BookingListScreen from '../bookinglist/BookingListScreen';
import ExamMainScreen from '../examdata/ExamMainScreen';
import Main from './Main';
const Home = () => {
  type MainStackParamList = {
    Main: undefined;
    BookingListScreen: undefined;
    BookInfoScreen: undefined;
    BookSearchScreen: undefined;
    ExamMainScreen: undefined;
  };
  const Stack = createStackNavigator<MainStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BookingListScreen" component={BookingListScreen} />
      <Stack.Screen name="BookSearchScreen" component={BookSearchScreen} />
      <Stack.Screen name="BookInfoScreen" component={BookInfoScreen} />
      <Stack.Screen name="ExamMainScreen" component={ExamMainScreen} />
    </Stack.Navigator>
  );
};
export default Home;
