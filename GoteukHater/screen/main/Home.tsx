import {createStackNavigator} from '@react-navigation/stack';
import React, {type PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import BookSearchScreen from '../bookinformation/BookSearchScreen';
import BookInfoScreen from '../bookinformation/BookInfoScreen';
import BookingListScreen from '../bookinglist/BookingListScreen';
import ExamMainScreen from '../examdata/ExamMainScreen';
import Main from './Main';
import {scale, width} from '../../config/globalStyles';
import {HeaderTitle} from '@react-navigation/elements';
import StyledText from '../../components/globalcomponents/StyledText';
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
      <Stack.Screen
        name="BookingListScreen"
        component={BookingListScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => {
            return (
              <StyledText style={{fontSize: 18 * scale, fontWeight: '700'}}>
                나의 신청현황
              </StyledText>
            );
          },
        }}
      />
      <Stack.Screen
        name="BookSearchScreen"
        component={BookSearchScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => {
            return (
              <StyledText style={{fontSize: 18 * scale, fontWeight: '700'}}>
                고전도서 정보 게시판
              </StyledText>
            );
          },
        }}
      />
      <Stack.Screen
        name="BookInfoScreen"
        component={BookInfoScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => {
            return (
              <StyledText style={{fontSize: 18 * scale, fontWeight: '700'}}>
                프로테스탄티즘의 윤리와 자본주의 정신
              </StyledText>
            );
          },
        }}
      />
      <Stack.Screen
        name="ExamMainScreen"
        component={ExamMainScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => {
            return (
              <StyledText style={{fontSize: 18 * scale, fontWeight: '700'}}>
                시험 족보
              </StyledText>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default Home;
