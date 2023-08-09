import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
