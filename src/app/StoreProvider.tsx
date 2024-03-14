'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
// import { makeStore } from '../store/index';
// import { AppStore } from '..//types/reduxTypes';
import { store } from '../store/index';

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore>();

//   if (!storeRef.current) {
//     storeRef.current = makeStore();
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
