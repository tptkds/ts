import { combineReducers } from '@reduxjs/toolkit';
import DarkModeReducer from '@/slices/darkModeSlice';

export default combineReducers({
  darkMode: DarkModeReducer,
  // pagenation: pagenationReducer,
});
