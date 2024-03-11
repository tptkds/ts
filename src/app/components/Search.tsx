'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Product } from '@/types/globalTypes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

function Search() {
  const productList = useAppSelector((state) => state.product.productList);
  const [searchText, setSearchText] = useState<string>('');
  const [searchedDatas, setSearchedData] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return;
  return (
    <>
      <div className="flex items-center relative w-full">
        <IoIosSearch className="text-xl" />
        {/* <input
          type="text"
          value={searchText}
          onChange={handleChange}
          className="bg-transparent border-b border-solid border-black focus:outline-none dark:border-white"
        /> */}
        <div className="absolute top-10 w-full">
          <ul className="bg-white dark:bg-black dark:bg-opacity-60 dark:text-white">
            {searchedDatas.map((item) => (
              <li key={item.id} className="truncate px-4 py-2 ">
                <Link href={`/product/detail/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
