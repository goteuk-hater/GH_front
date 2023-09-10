import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// User에서 관리해야하는 Slice
const initialState = {
  id: '',
  password: '',
  grade: '',
  major: '',
  name: '',
  read_certification: {},
  status: '',
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    // 모든 사용자 정보를 상태에 저장합니다.
    setUser(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
    setUserInfo(state, action) {
      state.grade = action.payload.grade;
      state.major = action.payload.major;
      state.name = action.payload.name;
      state.read_certification = action.payload.read_certification;
      state.status = action.payload.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser, setUserInfo} = UserSlice.actions;

export default UserSlice.reducer;
