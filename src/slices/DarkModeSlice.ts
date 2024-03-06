import { createSlice } from '@reduxjs/toolkit';

interface darkModeState {
  isDarkMode: boolean;
}

const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState: {
    isDarkMode: false,
  } as darkModeState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;
