'use client';
import React, { useContext, useEffect, useState } from 'react';
import { getProductList } from './apis/product';
import { setCartItems, setProductList } from '@/slices/productSlict';
import { CartItems, Product } from '@/types/globalTypes';
import { getCartItemsLocalStorage } from '@/utilities/localstorage';
import { AppDispatch } from '@/types/reduxTypes';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { AuthContext } from './AuthProvider';

export default function DataInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useContext(AuthContext);
  const dispatch: AppDispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList: Product[] = await getProductList();
        dispatch(setProductList(productList));
      } catch (error) {
        console.error('상품 리스트를 가져오는 것을 실패했습니다.:', error);
      }

      try {
        if (!currentUser) {
          const cartItems: CartItems = getCartItemsLocalStorage();
          dispatch(setCartItems(cartItems));
        }
      } catch (error) {
        console.error(
          '로컬 스토리지에서 장바구니 아이템을 가져오는 작업을 실패했습니다.:',
          error
        );
      }
      setLoading(false);
    };

    fetchData();
  }, [currentUser, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return <>{children}</>;
}

// export default function DataInitializer({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { currentUser } = useContext(AuthContext);
//   const dispatch: AppDispatch = useAppDispatch();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const productList: Product[] = await getProductList();
//       dispatch(setProductList(productList));

//       if (!currentUser) {
//         const cartItems: CartItems = getCartItemsLocalStorage();
//         dispatch(setCartItems(cartItems));
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return null;
//   }

//   return <>{children}</>;
// }
