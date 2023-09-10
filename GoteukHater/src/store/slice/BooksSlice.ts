import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import axios from 'axios';
import {SERVER_URL} from '@env';
import {Book} from '../../../config/Type';

interface BooksState {
  data: Book[];
  status: string;
}

const initialState = {
  data: [],
  status: '',
} as BooksState;
const asyncBooksFetch = createAsyncThunk('Books/fetchBooks', async () => {
  const response = await axios.get(`${SERVER_URL}books/book_data`);
  return response.data;
});

export const BooksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncBooksFetch.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(asyncBooksFetch.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = 'success';
    });
    builder.addCase(asyncBooksFetch.rejected, (state, action) => {
      state.data = [];
      state.status = 'fail';
    });
  },
});

// Action creators are generated for each case reducer function
export const {setBooks} = BooksSlice.actions;
export {asyncBooksFetch};

export default BooksSlice.reducer;
