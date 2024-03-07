import { getProducts, getUrl } from '@/utilities/product';
import { Product } from '@/types/globalTypes';
import ProductPage from '../components/ProductPage';

export default async function Page({ params }: { params: { slug: string } }) {
  const url: string = getUrl(params.slug[0]);
  const products: Product[] = await getProducts(url);

  return (
    <div className="h-full">
      <ProductPage products={products} url={url} />
    </div>
  );
}
