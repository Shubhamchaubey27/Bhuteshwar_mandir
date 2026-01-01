import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'Bhuteshwar Mandir - भूतेश्वर मंदिर',
  description: 'Bhuteshwar Mandir - A sacred place of devotion, peace, and spiritual enlightenment. Book pandits for pujas, attend daily Radha Naam Kirtan, and participate in temple events.',
  keywords: 'Bhuteshwar Mandir, temple, puja, pandit booking, kirtan, donation, Vedic music, astrology',
  icons: {
    icon: '/images/hanuman_logo_1765693410261.png',
    shortcut: '/images/hanuman_logo_1765693410261.png',
    apple: '/images/hanuman_logo_1765693410261.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
