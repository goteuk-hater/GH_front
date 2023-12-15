import React from 'react';
import {View} from 'react-native';
import Home from './Home';
import Formbtn from '../../components/Modal/Formbtn';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const NestPage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F9'}}>
      <BottomSheetModalProvider>
        <Home />
        <Formbtn />
      </BottomSheetModalProvider>
    </View>
  );
};
export default NestPage;
