import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import Formbtn from './src/components/Modal/Formbtn';
import Root from './src/screen/Root';
import {store} from './src/store/store';
import {Fetchuser} from './src/hooks/Hooks';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
export default App;
