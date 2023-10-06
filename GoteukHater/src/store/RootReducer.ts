import {combineReducers} from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import StatusSlice from './slice/StatusSlice';
import BooksSlice from './slice/BooksSlice';
import ModeSlice from './slice/ModeSlice';
import TabSlice from './slice/TabSlice';

const RootReducer = combineReducers({
  User: UserSlice,
  Status: StatusSlice,
  Books: BooksSlice,
  Mode: ModeSlice,
  Tab: TabSlice,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
