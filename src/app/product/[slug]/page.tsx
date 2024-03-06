import { permanentRedirect } from 'next/navigation';
import ProductList from '../components/ProductList';
import { getUrl } from '@/utilities/product';

export default function Page({ params }: { params: { slug: string } }) {
  let url: string = getUrl(params.slug);
  if (params.slug !== 'all' && url === 'https://fakestoreapi.com/products')
    permanentRedirect('/product/all');

  return (
    <div className="h-full">
      <ProductList url={url} />
    </div>
  );
}
