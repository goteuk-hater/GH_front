import React from 'react';
import {Provider} from 'react-redux';
import Root from './src/screen/Root';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
export default App;
