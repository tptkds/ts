import { Product } from '../types/globalTypes';

export const getAllProduct = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json();
  return json as Product[];
};
