import './globals.css';
import './globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Nav } from '@/components/layout';
import { OrderProvider } from '@/lib/contexts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E-commerce creado con fines educativos'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FBFDFE]`}>
        <OrderProvider>
          <Nav />
          <div className="wrapper">{children}</div>
        </OrderProvider>
      </body>
    </html>
  );
}
