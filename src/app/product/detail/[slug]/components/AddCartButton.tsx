import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCartItems } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import {
  getCartItemsLocalStorage,
  setCartItemsLocalStorage,
} from '@/utilities/localstorage';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

export default function AddCartButton({ item }: { item: Product }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const modal = useRef<HTMLDivElement | null>(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.name === 'goCart') {
      router.push('/cart');
    } else if (e.target.name === 'continueShopping') {
      modal.current?.classList.add('hidden');
    } else {
      setCartItemsLocalStorage(item);
      const newCartItems: CartItems | undefined = getCartItemsLocalStorage();
      if (newCartItems !== undefined) dispatch(setCartItems(newCartItems));
      else dispatch(setCartItems({}));
      modal.current?.classList.remove('hidden');
    }
  };

  return (
    <>
      <button onClick={handleClick}>ADD CART</button>
      <div className="flex flex-col hidden" ref={modal}>
        상품이 장바구니에 담겼어요.
        <div className="flex flex-row ">
          <button name="goCart" onClick={handleClick}>
            장바구니로 이동
          </button>
          <button name="continueShopping" onClick={handleClick}>
            계속 쇼핑하기
          </button>
        </div>
      </div>
    </>
  );
}
