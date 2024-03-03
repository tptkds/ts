import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  isDarkMode: boolean;
}

export const darkmodeSlice = createSlice({
  name: 'darkmodeSlice',
  initialState: {
    isDarkMode: false,
  } as DarkModeState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
