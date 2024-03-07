import { CartItems, Product } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface productState {
  products: Product[];
  currentPage: number;
  url: string;
  cartItems: CartItems;
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    products: [],
    currentPage: 0,
    url: '',
    cartItems: {},
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
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setProducts, setCurrentPage, setUrl, setCartItems } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
