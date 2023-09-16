import {SERVER_URL} from '@env';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

import {Fetchuser} from '../../hooks/Hooks';
import {Status} from '../../../config/Type';
interface StatusState {
  data: Status[];
  status: string;
}

const initialState = {
  data: [],
  status: '',
} as StatusState;
const asyncStatusFetch = createAsyncThunk('Status/fetchStatus', async () => {
  const user = await Fetchuser();
  const res = await axios.post(`${SERVER_URL}user/reserve_status`, {
    id: user.id,
    password: user.password,
  });

  return res.data;
});

export const StatusSlice = createSlice({
  name: 'Status',
  initialState,
  reducers: {
    // 모든 사용자 정보를 상태에 저장합니다.
    setStatus(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncStatusFetch.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(asyncStatusFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(asyncStatusFetch.rejected, (state, action) => {
      state.data = [];
      state.status = 'fail';
    });
  },
});

// Action creators are generated for each case reducer function
export const {setStatus} = StatusSlice.actions;
export {asyncStatusFetch};

export default StatusSlice.reducer;
