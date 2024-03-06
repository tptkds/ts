// import { permanentRedirect } from 'next/navigation';
import { getProducts, getUrl } from '@/utilities/product';
import { Product } from '@/types/globalTypes';
import ProductPage from '../components/ProductPage';

export default async function Page({ params }: { params: { slug: string } }) {
  // if (CATEGIRIES.indexOf(params.slug[0]) === -1) {
  //   permanentRedirect('/product/all/1');
  // }
  // if (params.slug.length === 1) {
  //   permanentRedirect(`/product/${params.slug[0]}/1`);
  // }

  const url: string = getUrl(params.slug[0]);
  const products: Product[] = await getProducts(url);

  return (
    <div className="h-full">
      <ProductPage products={products} url={url} />
    </div>
  );
}
