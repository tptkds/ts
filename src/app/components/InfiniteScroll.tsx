'use client';
import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface InfiniteScrollComponentProps {
  fetchData: () => void;
  data: any[];
}
export default function InfiniteScrollComponent() {
  const data = useMemo(() => ['dsa'], []);
  const fetchData = () => null;
  const [items, setItems] = useState<any[]>(data);
  useEffect(() => {
    setItems(data);
  }, [data]);

  //   const handleFetchData = () => {
  //     // fetchData 함수를 호출하여 새로운 데이터를 가져올 수 있도록 구현
  //     fetchData();
  //   };
  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {items}
    </InfiniteScroll>
  );
}
