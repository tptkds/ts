import { darkModeReducer } from '@/slices/DarkModeSlice';
import { productReducer } from '@/slices/productSlict';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  darkMode: darkModeReducer,
  product: productReducer,
});
