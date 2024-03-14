import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

interface User {
  isLogined: boolean;
  user: UserInfo | null;
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    isLogined: false,
    user: null,
  } as User,
  reducers: {
    setUserLogIn: (state) => {
      state.isLogined = true;
    },
    setUserLogOut: (state) => {
      state.isLogined = false;
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserLogIn, setUserLogOut, setUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
