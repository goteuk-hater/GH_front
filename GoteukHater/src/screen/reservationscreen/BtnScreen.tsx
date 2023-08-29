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
import {globalstyles, height, scale} from '../../../config/globalStyles';
import StyledText from '../../components/globalcomponents/StyledText';
import {BtnParamList} from '../../../config/Type';

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
          }}>
          <Modal.Screen
            name="ReservationHome"
            component={ReservationHome}
            options={{
              headerTitle: () => (
                <StyledText style={globalstyles.h2}>고전시험 예약</StyledText>
              ),
              headerLeft: () => null,
              headerRight: () => null,
            }}
          />
          <Modal.Screen
            name="ReservationDetail"
            component={ReservationDetail}
            options={{
              headerTitle: () => (
                <StyledText style={globalstyles.h2}>고전시험 예약</StyledText>
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
        </Modal.Group>
      </Modal.Navigator>
    </NavigationContainer>
  );
};

export default BtnScreen;
