import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const Noto_KR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siyeol-blog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={Noto_KR.className}>{children}</body>
    </html>
  );
}
