import { Product } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface productState {
  products: Product[];
  currentPage: number;
  url: string;
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    products: [],
    currentPage: 0,
    url: '',
  } as productState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setProducts, setCurrentPage, setUrl } = productSlice.actions;
export const productReducer = productSlice.reducer;
