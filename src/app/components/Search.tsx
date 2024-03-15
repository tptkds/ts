'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { MdCancel, MdOutlineCancel } from 'react-icons/md';

function Search() {
  const productList = useAppSelector((state) => state.product.productList);
  const [searchText, setSearchText] = useState<string>('');
  const [searchedDatas, setSearchedData] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const modalBackground = useRef<HTMLDivElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);
  const searchData = (text: string) => {
    const datas: Product[] = productList.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setSearchedData(datas ? datas : []);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value !== '') searchData(e.target.value);
    else {
      setSearchedData([]);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.parentNode.name === 'searching') {
      modalBackground.current?.classList.remove('hidden');
      input.current?.focus();
    } else {
      modalBackground.current?.classList.add('hidden');
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return;
  return (
    <>
      <div className="flex items-center relative w-full">
        <button name="searching" id="searching" onClick={handleClick}>
          <IoIosSearch className="text-xl" />
        </button>

        <div
          className="bg-black bg-opacity-30 w-full h-full fixed top-0 left-0 hidden"
          ref={modalBackground}
        >
          <div className="absolute top-10  search-modal-center bg-white w-1/2 h-80svh overflow-y-auto">
            <button
              name="downModal"
              className="absolute right-4 top-4 text-xl"
              onClick={handleClick}
            >
              <IoCloseSharp />
            </button>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Typing Somthing..."
              className="border-b border-solid border-black focus:outline-none dark:border-white w-full"
              ref={input}
            />
            <ul className="bg-white dark:bg-black dark:bg-opacity-60 dark:text-white">
              {searchedDatas.map((item) => (
                <li key={item.id} className="truncate px-4 py-2 ">
                  <Link
                    href={`/product/detail/${item.id}`}
                    onClick={() =>
                      modalBackground.current?.classList.add('hidden')
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
