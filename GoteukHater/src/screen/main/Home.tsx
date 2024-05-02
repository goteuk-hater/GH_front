import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import BookSearchScreen from '../bookinformation/BookSearchScreen';
import BookInfoScreen from '../bookinformation/BookInfoScreen';
import BookingListScreen from '../bookinglist/BookingListScreen';
import Main from './Main';
import {globalStyle, scale, width} from '@/config/globalStyle';
import Btn from '../../components/global/Btn';
import {MainStackParamList} from '../../config/Type';
import {useNavigation} from '@react-navigation/native';
import {MypageScreen} from '../mypage/MypageScreen';
import StyledText from '@/components/global/StyledText';

const Home = () => {
  const Stack = createStackNavigator<MainStackParamList>();

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
              <StyledText style={globalStyle.h2}>나의 신청현황</StyledText>
            ),
            headerLeft: BackButton,
          }}
        />
        <Stack.Screen
          name="BookSearchScreen"
          component={BookSearchScreen}
          options={{
            headerTitle: () => (
              <StyledText style={globalStyle.h2}>
                고전도서 정보 게시판
              </StyledText>
            ),
            headerLeft: BackButton,
          }}
        />
        <Stack.Screen
          name="BookInfoScreen"
          component={BookInfoScreen as never}
          options={{
            headerTitle: () => (
              <StyledText style={globalStyle.h1}>
                고전도서 정보 게시판
              </StyledText>
            ),
            headerLeft: BackButton,
          }}
        />
        <Stack.Screen
          name="MypageScreen"
          component={MypageScreen as never}
          options={{
            headerTitle: () => (
              <StyledText style={globalStyle.h1}>내 정보</StyledText>
            ),
            headerLeft: BackButton,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Btn
      Icon="chevron-back"
      onPress={() => {
        navigation.navigate('Main' as never);
      }}
    />
  );
};
export default Home;
