import {combineReducers} from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import StatusSlice from './slice/StatusSlice';

const RootReducer = combineReducers({
  User: UserSlice,
  Status: StatusSlice,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
