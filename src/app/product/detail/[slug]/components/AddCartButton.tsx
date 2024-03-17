import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCartItems } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import {
  getCartItemsLocalStorage,
  addCartItemsLocalStorage,
} from '@/utilities/localstorage';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

export default function AddCartButton({ item }: { item: Product }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const modal = useRef<HTMLDivElement | null>(null);
  const modalBackground = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    if (e.target.name === 'goCart') {
      router.push('/cart');
    } else if (e.target.name === 'continueShopping') {
      modal.current?.classList.add('hidden');
      modalBackground.current?.classList.add('hidden');
    } else {
      addCartItemsLocalStorage(item);
      const newCartItems: CartItems | undefined = getCartItemsLocalStorage();
      if (newCartItems !== undefined) dispatch(setCartItems(newCartItems));
      else dispatch(setCartItems({}));
      modal.current?.classList.remove('hidden');
      modalBackground.current?.classList.remove('hidden');
    }
  };

  return (
    <>
      <button onClick={handleClick}>ADD CART</button>
      <div
        className="absolute flex flex-col modal-center shadow-md items-center pt-8 z-20 rounded-box hidden "
        ref={modal}
      >
        <p className=" mb-4">상품이 장바구니에 담겼어요.</p>
        <div className="flex flex-row ">
          <button name="goCart" onClick={handleClick} className="mr-8 p-4 ">
            장바구니로 이동
          </button>
          <button name="continueShopping" onClick={handleClick} className="p-4">
            계속 쇼핑하기
          </button>
        </div>
      </div>
      <div
        className="bg-black bg-opacity-30 w-full h-full fixed top-0 left-0 hidden"
        ref={modalBackground}
      ></div>
    </>
  );
}
