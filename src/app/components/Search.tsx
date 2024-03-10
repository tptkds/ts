'use client';
import { useAppSelector } from '@/hooks/useAppSelector';
import React, { useState } from 'react';

function Search() {
  const productList = useAppSelector((state) => state.product.productList);
  const [searchText, setSearchText] = useState<string>('');
  const [searchedTitles, setSearchedTitles] = useState<string[]>([]);

  const searchData = (text: string) => {
    console.log(productList);
    const searchedDatas = productList.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    console.log(searchedDatas);
    const titles = searchedDatas.map((item) => item.title);
    setSearchedTitles(titles ? titles : []);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value !== '') searchData(e.target.value);
    else {
      setSearchedTitles([]);
    }
  };

  return (
    <>
      <div>
        <input type="text" value={searchText} onChange={handleChange} />
        <div className="absolute">{searchedTitles}</div>
      </div>
    </>
  );
}

export default Search;
