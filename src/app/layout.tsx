import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Nav from './components/Nav';

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
    <html lang="ko">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider>
            <main className="bg-white dark: bg-black">
              <Nav />
              {children}
            </main>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
