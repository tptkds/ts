'use client';

import { ITEMSPERPAGE } from '@/constants/product';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCurrentPage } from '@/slices/productSlict';

interface PagenationProps {
  totalItems: number;
}

export default function Pagenation({ totalItems }: PagenationProps) {
  const itemsPerPage = ITEMSPERPAGE;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = useAppSelector((state) => state.product.currentPage);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const name = target.name as string;

    if (name === 'newer') {
    } else if (name === 'older') {
    } else {
    }
  };

  return (
    <div>
      <ul className="flex justify-center items-center	">
        <li className="p-2.5">
          <button name="newer" onClick={handleClick}>
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
          <button name="older" onClick={handleClick}>
            OLDER
          </button>
        </li>
      </ul>
    </div>
  );
}
