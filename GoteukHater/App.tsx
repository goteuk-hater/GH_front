import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Formbtn from './src/components/Modal/Formbtn';
import store from './src/redux/store';
import Root from './src/screen/Root';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
export default App;
