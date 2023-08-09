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
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import Home from './Home';
import Formbtn from '../../components/Modal/Formbtn';
import {create} from 'react-test-renderer';

const NestPage = (props: any) => {
  return (
    <>
      <Home />
      <Formbtn />
    </>
  );
};
export default NestPage;