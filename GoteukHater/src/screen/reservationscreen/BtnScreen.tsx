import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetModalStackBehavior} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModal';
import {
  NavigationContainer,
  NavigationProp,
  NavigationState,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ReservationDetail from './ReservationDetail';
import ReservationHome from './ReservationHome';

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
          headerShown: false,
        }}>
        <Stack.Screen name="ReservationHome" component={ReservationHome} />
        <Stack.Screen
          name="ReservationDetail"
          component={ReservationDetail}
          initialParams={{
            close: props.close,
            navigation: navigation,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BtnScreen;
