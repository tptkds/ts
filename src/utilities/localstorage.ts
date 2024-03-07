import { CartItems, Product } from '@/types/globalTypes';

export const setCartItemsLS = (item: Product) => {
  const cartItems: CartItems | undefined = getCartItemsLS();
  const key: string = item.id;
  const value: Product = item;

  if (cartItems === undefined) {
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

export const getCartItemsLS = () => {
  const jsonString = localStorage.getItem('cartItems');
  if (jsonString) {
    const parsedData: CartItems = JSON.parse(jsonString);
    return parsedData;
  }
  return undefined;
};
