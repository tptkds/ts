import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Nav from './components/Nav';
import './globals.css';
import Notice from './components/Notice';
import InitialStore from './InitialStore';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

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
    <html lang="ko" suppressHydrationWarning>
      <body
        className={
          inter.className + ' overflow-x-hidden select-none h-dvh relative'
        }
      >
        <Image
          src="/backgrounds/home-bg.jpg"
          alt="메인 배경 이미지"
          fill
          sizes="100vw"
        />
        <StoreProvider>
          <ThemeProvider attribute="class">
            <InitialStore />
            <div className="relative h-dvh">
              <div className="min-h-full">
                <header className=" relative z-10">
                  <Notice />
                  <Nav />
                </header>
                <main className="py-0 p-12 z-0">{children}</main>
              </div>
              <footer
                className="relative bg-white bg-opacity-60 h-1/6 flex flex-col items-center pt-6"
                style={{ transform: 'translateY(-100%)' }}
              >
                <ul className="flex">
                  <li className="mr-4">
                    <FaGithub />
                  </li>
                  <li>
                    <SiVelog />
                  </li>
                </ul>
                <ul>
                  <li>DEVELOPER: YOUGYEONG KIM</li>
                  <li>EMAIL: tptkds12@gmail.com</li>
                </ul>
              </footer>
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
