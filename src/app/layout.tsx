import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Nav from './components/Nav';
import DarkModeToggleButton from './components/DarkModeToggleButton';
import './globals.css';
import Notice from './components/Notice';

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
          inter.className + ' bg-gray-300 overflow-x-hidden select-none'
        }
      >
        <StoreProvider>
          <ThemeProvider attribute="class">
            <div className="">
              <header>
                <DarkModeToggleButton />
                <Notice />
                <Nav />
              </header>
              <main className="p-12">{children}</main>
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
