import React from 'react';
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const getAllProduct = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const products = await res.json();
  return products as Product[];
};

interface SingUpProps {}

export default async function All() {
  const;
  return <div>All</div>;
}
