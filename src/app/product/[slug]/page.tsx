import { permanentRedirect } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case 'all': {
      return;
    }
    case 'electronics': {
      return;
    }
    case 'jewelery': {
      return;
    }
    case 'men': {
      return;
    }
    case 'women': {
      return;
    }
    default:
      return permanentRedirect(`/product/all`);
  }
  return <h1>My Page{params.slug}</h1>;
}
