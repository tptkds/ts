import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: '69svh' }}
    >
      <h2 className="mb-2">Not Found</h2>
      <p className="mb-4">유효하지 않은 경로입니다.</p>
      <Link href="/" className="underline">
        Home으로 가기
      </Link>
    </div>
  );
}
