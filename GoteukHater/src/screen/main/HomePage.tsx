import React from 'react';
import {View} from 'react-native';
import Home from './Home';
import Formbtn from '../../components/Modal/FloatButton';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const HomePage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F9'}}>
      <BottomSheetModalProvider>
        <Home />
        <Formbtn />
      </BottomSheetModalProvider>
    </View>
  );
};
export default HomePage;
