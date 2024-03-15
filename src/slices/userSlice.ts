import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

interface User {
  userInfo: UserInfo | null;
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userInfo: null,
  } as User,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
