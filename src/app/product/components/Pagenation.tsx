'use client';

import { ITEMSPERPAGE } from '@/constants/product';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCurrentPage } from '@/slices/productSlict';
import { Product } from '@/types/globalTypes';

export default function Pagenation() {
  const currentPage: number = useAppSelector(
    (state) => state.product.currentPage
  );
  const products: Product[] = useAppSelector((state) => state.product.products);
  const totalItems: number = products.length;
  const totalPages: number = Math.ceil(totalItems / ITEMSPERPAGE);

  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const name: string = target.name;

    if (name === 'newer') {
      dispatch(setCurrentPage(currentPage - 1));
    } else if (name === 'older') {
      dispatch(setCurrentPage(currentPage + 1));
    } else {
      dispatch(setCurrentPage(Number(name)));
    }
  };

  return (
    <div>
      <ul className="flex justify-center items-center	">
        <li className="p-2.5">
          <button
            name="newer"
            onClick={handleClick}
            disabled={currentPage === 1}
          >
            NEWER
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page} className="p-2.5">
              <button
                name={page.toString()}
                onClick={handleClick}
                disabled={page === currentPage}
              >
                {page}
              </button>
            </li>
          )
        )}
        <li className="p-2.5">
          <button
            name="older"
            onClick={handleClick}
            disabled={currentPage === totalPages}
          >
            OLDER
          </button>
        </li>
      </ul>
    </div>
  );
}
