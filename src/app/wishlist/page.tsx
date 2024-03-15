import React from 'react';
import List from './components/List';

export default function WishlistComponent() {
  return (
    <div>
      <div className="mt-14 flex flex-col justify-center w-full items-center">
        <h2>Wish List</h2>
      </div>
      <List />
    </div>
  );
}
