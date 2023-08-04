import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ReservationDetail from './ReservationDetail';
import ReservationHome from './ReservationHome';
import Btn from '../../components/globalcomponents/Btn';
import {height} from '../../../config/globalStyles';

type BtnParamList = {
  ReservationHome: undefined;
  ReservationDetail: {
    close: () => void;
    navigation: NavigationProp<NavigationState>;
  };
};
interface Props {
  close: () => void;
}

const Stack = createStackNavigator<BtnParamList>();
const BtnScreen = (props: Props) => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStatusBarHeight: 0,
          headerStyle: {
            height: 44 * height,
            backgroundColor: '#F6F6F9',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E8',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="ReservationHome"
          component={ReservationHome}
          options={{
            title: '고전시험 예약',
            headerRight: () => (
              <Btn
                title="다음"
                onPress={() => {
                  navigation.navigate('ReservationDetail' as never);
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ReservationDetail"
          component={ReservationDetail}
          options={{
            title: '고전시험 예약',
            headerRight: () => (
              <Btn
                title="신청"
                onPress={() => {
                  props.close();
                }}
              />
            ),
            headerLeft: () => (
              <Btn
                Icon="chevron-back"
                onPress={() => {
                  navigation.navigate('ReservationHome' as never);
                }}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BtnScreen;
