import { combineReducers } from '@reduxjs/toolkit';
import DarkModeReducer from '@/slices/DarkModeSlice';

export default combineReducers({
  darkMode: DarkModeReducer,
});
