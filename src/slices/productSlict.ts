import { Product } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface productState {
  products: Product[];
  currentPage: number;
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    products: [],
    currentPage: 1,
  } as productState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setProducts, setCurrentPage } = productSlice.actions;
export const productReducer = productSlice.reducer;
