import { permanentRedirect } from 'next/navigation';
import { getProducts, getUrl } from '@/utilities/product';
import { Product } from '@/types/globalTypes';
import ProductPage from '../components/ProductPage';

export default async function Page({ params }: { params: { slug: string } }) {
  let url: string = getUrl(params.slug);
  if (params.slug !== 'all' && url === 'https://fakestoreapi.com/products') {
    permanentRedirect('/product/all');
  }
  const products: Product[] = await getProducts(url);
  const totalItems: number = products.length;
  const limitedProducts = products.slice(0, 9);
  return (
    <div className="h-full">
      <ProductPage products={limitedProducts} totalItems={totalItems} />
    </div>
  );
}
