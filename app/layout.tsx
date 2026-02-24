import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Safehands Physio – Sports & Musculoskeletal Physiotherapy Clinic in Kothrud, Pune',
  description: 'Safehands Physio in Kothrud, Pune offers expert sports injury rehabilitation, musculoskeletal pain management, post-surgical physiotherapy, and personalized recovery programs led by Dr. Kavita Gandhi (MPTh).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}