export const fetchAllProduct = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return <div>{products}</div>;
};
