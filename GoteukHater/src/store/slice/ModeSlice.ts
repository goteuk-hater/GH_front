import {createSlice} from '@reduxjs/toolkit';

// User에서 관리해야하는 Slice
const initialState = {
  visible: true,
};

export const ModeSlice = createSlice({
  name: 'Mode',
  initialState,
  reducers: {
    setVisible(state) {
      state.visible = true;
    },
    setInvisible(state) {
      state.visible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setVisible, setInvisible} = ModeSlice.actions;

export default ModeSlice.reducer;
