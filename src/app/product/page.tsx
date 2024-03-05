import { permanentRedirect } from 'next/navigation';

export default function Product() {
  permanentRedirect(`/product/all`);
}
