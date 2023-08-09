import {createSlice} from '@reduxjs/toolkit';

interface Counter {
  value: number;
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: Counter) => {
      state.value += 1;
    },
    decrement: (state: Counter) => {
      state.value -= 1;
    },
    incrementByAmount: (state: Counter, action) => {
      state.value += action.payload;
    },
  },
});
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state: Counter) => state.counter.value;
