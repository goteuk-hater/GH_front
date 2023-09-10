import {combineReducers} from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import StatusSlice from './slice/StatusSlice';
import BooksSlice from './slice/BooksSlice';

const RootReducer = combineReducers({
  User: UserSlice,
  Status: StatusSlice,
  Books: BooksSlice,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
