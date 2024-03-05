import { createSlice } from '@reduxjs/toolkit';

interface darkModeState {
  isDarkMode: boolean;
}

export const darkmodeSlice = createSlice({
  name: 'darkmodeSlice',
  initialState: {
    isDarkMode: false,
  } as darkModeState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
