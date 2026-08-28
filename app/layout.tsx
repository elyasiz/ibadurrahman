import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/content/site.config';
import type { CSSProperties } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: 'Yayasan Ibadurrahman | RA, SDI, SMP Plus, dan SMA',
  description: 'Website resmi Yayasan Ibadurrahman di Kota Tangerang yang menaungi RA Ibadurrahman, SDI Ibadurrahman, SMP Plus Ibadurrahman, dan SMA Ibadurrahman.',
  openGraph: {
    title: 'Yayasan Ibadurrahman',
    description: 'Pendidikan Islami dari RA, SDI, SMP Plus, hingga SMA.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yayasan Ibadurrahman',
    description: 'Pendidikan Islami dari RA, SDI, SMP Plus, hingga SMA.',
  },
  icons: { icon: '/assets/logo/ibadurrahman-logo.jpeg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${lora.variable} antialiased`}
        style={{
          '--color-primary': siteConfig.brand.colors.primary,
          '--color-secondary': siteConfig.brand.colors.secondary,
          '--color-accent': siteConfig.brand.colors.accent,
          '--color-surface': siteConfig.brand.colors.background,
          '--color-paper': siteConfig.brand.colors.surface,
          '--color-ink': siteConfig.brand.colors.text,
          '--color-muted': siteConfig.brand.colors.mutedText,
        } as CSSProperties}
      >
        <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
