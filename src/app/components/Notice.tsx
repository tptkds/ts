import React from 'react';

function Notice() {
  const text =
    'Check out the fresh drop at SS24 – explore and roll through the vibes!';
  return (
    <div className="w-full whitespace-nowrap h-6 bg-zinc-100	bg-opacity-80 dark:bg-black dark:text-white dark:bg-opacity-60">
      <div className="slideText">
        {new Array(10).fill(null).map((_, i) => (
          <span key={i} className="text-xs  mr-12">
            {text}
          </span>
        ))}
        {/* <span className="text-sm  mr-12">
          Check out the fresh drop at SS24 – explore and roll through the vibes!
        </span>
        <span className="text-sm  mr-12">
          The 24S/S product has been updated. You can check all the products in
          SHOP if you want.
        </span>
        <span className="text-sm  mr-12">
          The 24S/S product has been updated. You can check all the products in
          SHOP if you want.
        </span>
        <span className="text-sm  mr-12">
          The 24S/S product has been updated. You can check all the products in
          SHOP if you want.
        </span>
        <span className="text-sm  mr-12">
          The 24S/S product has been updated. You can check all the products in
          SHOP if you want.
        </span>
        <span className="text-sm  mr-12">
          The 24S/S product has been updated. You can check all the products in
          SHOP if you want.
        </span>
        <span className="text-sm  mr-12">
          The 24S/S product has been updated. You can check all the products in
          SHOP if you want.
        </span> */}
      </div>
    </div>
  );
}

export default Notice;
