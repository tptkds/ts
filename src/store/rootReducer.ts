import { darkModeReducer } from '@/slices/DarkModeSlice';
import { productReducer } from '@/slices/productSlict';
import { userReducer } from '@/slices/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  darkMode: darkModeReducer,
  product: productReducer,
  user: userReducer,
});
