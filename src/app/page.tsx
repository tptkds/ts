import InfiniteScrollComponent from './components/InfiniteScroll';

export default function All() {
  // const fetchData = async () => {
  //   'use server';
  //   const a = await setTimeout(() => console.log('1초 땡'), 1000);
  // };

  return (
    <div>
      <InfiniteScrollComponent />
    </div>
  );
}
