import Image from 'next/image';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  return (
    <>
      <Image
        src="/backgrounds/home-bg.jpg"
        alt="메인 배경 이미지"
        fill
        sizes="100vw"
      />

      <ImageSlider />
    </>
  );
}
