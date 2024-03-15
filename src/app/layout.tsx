import type { Metadata } from 'next';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import './globals.css';
import Footer from './components/Footer';
import { Inter, Josefin_Sans, Noto_Sans } from 'next/font/google';
import DataInitializer from './DataInitializer';
import Header from './components/Header';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});
export const metadata: Metadata = {
  title: 'showfinnmore',
  description: '여자 옷, 남자 옷, 악세사리, 전자제품 판매 쇼핑몰',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={
          notoSans.className + ' overflow-x-hidden select-none h-dvh relative'
        }
      >
        <StoreProvider>
          <ThemeProvider attribute="class">
            <DataInitializer />
            <div className="relative h-dvh dark:bg-zinc-900 dark:text-white">
              <div className="min-h-full dark:bg-zinc-900 dark:text-white">
                <Header />
                <main className="py-0 p-12 z-0">{children}</main>
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
