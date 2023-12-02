import './globals.css';
import './globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E-commerce creado con fines educativos'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FBFDFE] wrapper`}>{children}</body>
    </html>
  );
}
