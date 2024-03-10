import { CartItems, Product } from '@/types/globalTypes';

export const setCartItemsLocalStorage = (item: Product) => {
  const cartItems: CartItems | never[] = getCartItemsLocalStorage();
  const key: number = item.id;
  const value: Product = item;

  if (!cartItems || Object.keys(cartItems).length === 0) {
    const newCartItems = { [key]: value };
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  } else {
    let newCartItems = { ...cartItems };
    if (key in cartItems) {
      delete newCartItems[key];
    } else {
      newCartItems = { ...cartItems, [key]: value };
    }
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  }
};

export const getCartItemsLocalStorage = (): CartItems => {
  if (typeof window === 'undefined') return {};
  const jsonString = localStorage.getItem('cartItems');
  if (jsonString) {
    const parsedData: CartItems = JSON.parse(jsonString);
    return parsedData;
  }
  return {};
};

export const deleteCartItemsLocalStorage = (keys: string[]) => {
  let newCartItems: CartItems = getCartItemsLocalStorage();
  keys.forEach((key) => {
    delete newCartItems[key];
  });
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
};