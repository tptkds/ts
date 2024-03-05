import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Nav from './components/Nav';
import DarkModeToggleButton from './components/DarkModeToggleButton';
import './globals.css';

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
      <body className={inter.className + ' bg-gray-300'}>
        <StoreProvider>
          <ThemeProvider attribute="class">
            <div>
              <header>
                <DarkModeToggleButton />
                <Nav />
              </header>

              {children}
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
