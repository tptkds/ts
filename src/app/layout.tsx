import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'showfinnmore',
  description: '여성 쇼핑몰입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="ko">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
