import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ShopContextProvider from '@/contexts/ShopContext';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Shopper',
  description: 'Shopper E-Commerce',
  icons: {
    icon: [
      {
        url: '/logo.png',
        href: '/logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <ShopContextProvider>{children}</ShopContextProvider>
        <Footer />
      </body>
    </html>
  );
}
