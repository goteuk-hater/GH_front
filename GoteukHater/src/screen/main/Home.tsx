import {createStackNavigator} from '@react-navigation/stack';
import React, {type PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
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

const Home = (props: any) => {
  interface Props {
    navigation: NavigationProp<NavigationState>;
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  }
  type MainStackParamList = {
    Main: Props;
    BookingListScreen: undefined;
    BookInfoScreen: undefined;
    BookSearchScreen: undefined;
    ExamMainScreen: undefined;
    BtnScreen: undefined;
    ReservationHome: undefined;
  };
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
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="BookingListScreen" component={BookingListScreen} />
        <Stack.Screen name="BookSearchScreen" component={BookSearchScreen} />
        <Stack.Screen name="BookInfoScreen" component={BookInfoScreen} />
        <Stack.Screen name="ExamMainScreen" component={ExamMainScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default Home;
