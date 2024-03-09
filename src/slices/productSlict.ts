import { CartItems, Product } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface productState {
  productList: Product[];
  currentPage: number;
  category: string;
  cartItems: CartItems;
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    productList: [],
    currentPage: 0,
    category: '',
    cartItems: {},
  } as productState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setProductList, setCurrentPage, setCategory, setCartItems } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
