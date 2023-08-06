import {
  NavigationContainer,
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ReservationDetail from './ReservationDetail';
import ReservationHome from './ReservationHome';
import Btn from '../../components/globalcomponents/Btn';
import {height, scale} from '../../../config/globalStyles';

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
const Modal = createStackNavigator<BtnParamList>();
const BtnScreen = (props: Props) => {
  return (
    <NavigationContainer independent={true}>
      <Modal.Navigator>
        <Modal.Group
          screenOptions={{
            headerStatusBarHeight: 0,
            headerStyle: {
              height: 44 * height,
              backgroundColor: '#F6F6F9',
              borderBottomWidth: 1,
              borderBottomColor: '#E5E5E8',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 18 * scale,
              fontWeight: '700',
            },
          }}>
          <Modal.Screen
            name="ReservationHome"
            component={ReservationHome}
            options={{
              title: '고전시험 예약',
              headerLeft: () => (
                <Btn
                  Icon="close"
                  onPress={() => {
                    props.close();
                  }}
                />
              ),
              headerRight: () => (
                <Btn
                  title="닫기"
                  onPress={() => {
                    props.close();
                  }}
                />
              ),
            }}
          />
          <Modal.Screen
            name="ReservationDetail"
            component={ReservationDetail}
            options={{
              title: '고전시험 예약',
              headerRight: () => (
                <Btn
                  title="닫기"
                  onPress={() => {
                    props.close();
                  }}
                />
              ),
            }}
          />
        </Modal.Group>
      </Modal.Navigator>
    </NavigationContainer>
  );
};

export default BtnScreen;
