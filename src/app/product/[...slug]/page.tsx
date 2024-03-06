import { permanentRedirect } from 'next/navigation';
import { getProducts, getUrl } from '@/utilities/product';
import { Product } from '@/types/globalTypes';
import ProductPage from '../components/ProductPage';
import { CATEGIRIES, ITEMSPERPAGE } from '@/constants/product';

export default async function Page({ params }: { params: { slug: string } }) {
  if (CATEGIRIES.indexOf(params.slug[0]) === -1) {
    permanentRedirect('/product/all/1');
  }
  if (params.slug.length === 1) {
    permanentRedirect(`/product/${params.slug[0]}/1`);
  }

  const url: string = getUrl(params.slug[0]);
  const products: Product[] = await getProducts(url);
  const totalItems: number = products.length;

  const page: string = params.slug[1];

  console.log(ITEMSPERPAGE, page);

  const limitedProducts: Product[] = await getProducts(
    url + `?limit=${ITEMSPERPAGE}&page=2`
  );

  return (
    <div className="h-full">
      <ProductPage products={limitedProducts} totalItems={totalItems} />
    </div>
  );
}
