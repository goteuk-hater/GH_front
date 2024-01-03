import {createSlice} from '@reduxjs/toolkit';
import {Tab} from '../../config/Type';

// User에서 관리해야하는 Slice
const initialState = {
  screen: 'question',
} as Tab;

export const TabSlice = createSlice({
  name: 'Tab',
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setScreen} = TabSlice.actions;

export default TabSlice.reducer;
