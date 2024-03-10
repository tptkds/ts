import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Nav from './components/Nav';
import './globals.css';
import Notice from './components/Notice';
import InitialStore from './InitialStore';

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
      <body className={inter.className + ' overflow-x-hidden select-none'}>
        <StoreProvider>
          <ThemeProvider attribute="class">
            <InitialStore />
            <div className="relative">
              <header className=" relative z-10">
                <Notice />
                <Nav />
              </header>
              <main className="py-0 p-12 z-0">{children}</main>
              <footer>
                <ul>
                  <li>GITHUB</li>
                  <li>BLOG</li>
                </ul>
                <ul>
                  <li>CEO: YOUGYEONG KIM</li>
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
