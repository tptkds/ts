import { permanentRedirect } from 'next/navigation';
import ProductList from '../components/ProductList';

export default function Page({ params }: { params: { slug: string } }) {
  let url = null;
  const getUrl = (slug: string) => {
    switch (slug) {
      case 'all': {
        url = 'https://fakestoreapi.com/products';
        return;
      }
      case 'electronics': {
        url = 'https://fakestoreapi.com/products/category/electronics';
        return;
      }
      case 'jewelery': {
        url = 'https://fakestoreapi.com/products/category/jewelery';
        return;
      }
      case 'men': {
        ("https://fakestoreapi.com/products/category/men's clothing");
        return;
      }
      case 'women': {
        ("https://fakestoreapi.com/products/category/women's clothing");
        return;
      }
      default:
        url = null;
        return permanentRedirect(`/product/all`);
    }
  };

  return <div></div>;
}

//https://nextjs.org/docs/app/building-your-application/routing/redirecting#permanentredirect-function
