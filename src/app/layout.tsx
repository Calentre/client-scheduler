import PrimaryLayout from '@/components/common/PrimaryLayout';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calentre: Client scheduler',
  description: 'TBD',
};

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'auto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={workSans.className}>
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
