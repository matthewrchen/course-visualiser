import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Menu from '../components/menu';
import Footer from '../components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Course Visualiser',
  description: 'Interactive course visualiser for the BE(Hons) offered by UoA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Menu />
        <main className="mx-auto min-h-full w-3/5 grow bg-white px-5 py-[200px] font-sans">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
