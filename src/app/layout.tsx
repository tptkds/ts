import type { Metadata } from 'next';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import Nav from './components/Nav';
import './globals.css';
import Notice from './components/Notice';
import InitialStore from './InitialStore';
import Footer from './components/Footer';
import { Inter, Rock_3D } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const rock3D = Rock_3D({ subsets: ['latin'], weight: ['400'] });
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
          rock3D.className + ' overflow-x-hidden select-none h-dvh relative'
        }
      >
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
              <Footer />
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
