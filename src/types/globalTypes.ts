export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface CartItems {
  [productId: string]: { product: Product; count: number };
}

export interface Wishlist {
  [productId: string]: Product;
}
