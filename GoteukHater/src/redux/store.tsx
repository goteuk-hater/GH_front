import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';
import tagSlice from './reducer/tagSlice';
export default configureStore({
  reducer: {
    counter: counterSlice,
    tag: tagSlice,
  },
});
