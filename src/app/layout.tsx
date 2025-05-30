import '@/globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { CookieConsent } from '@/shared';

import { SchemaBreadcrumb } from '@/SEO';
import Head from 'next/head';
import ClientOnly from '@/shared/ClientOnly';
import { Suspense } from 'react';
import CoreWebVitals from '@/shared/CoreWebVitals';

const roboto = localFont({
  src: [
    {
      path: '../fonts/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  style: 'normal',
  variable: '--font-roboto',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'eSimFácil | Compre e Ative seu eSIM Claro ou Vivo Online',
  description:
    'Ative seu eSIM Claro ou Vivo 100% online com a eSimFácil. Troque seu chip físico ou adquira uma nova linha pré-paga sem sair de casa. Suporte rápido e seguro!',
  keywords: [
    'comprar eSIM Claro online',
    'comprar eSIM Vivo online',
    'ativar eSIM Claro',
    'ativar eSIM Vivo',
    'eSIM Claro pré-pago',
    'eSIM Vivo pré-pago',
    'migrar chip Claro para eSIM',
    'migrar chip Vivo para eSIM',
    'dispositivos compatíveis com eSIM Claro',
    'dispositivos compatíveis com eSIM Vivo',
    'eSimFácil Claro',
    'eSimFácil Vivo',
  ],
  authors: [{ name: 'eSimFácil' }],
  creator: 'eSimFácil',
  publisher: 'eSimFácil',
  alternates: {
    canonical: 'https://www.esimfacil.com',
  },
  metadataBase: new URL('https://www.esimfacil.com'),
  openGraph: {
    type: 'website',
    url: 'https://www.esimfacil.com',
    title: 'eSimFácil | Compre e Ative seu eSIM Claro ou Vivo Online',
    description:
      'Ative seu eSIM Claro ou Vivo 100% online com a eSimFácil. Troque seu chip físico ou adquira uma nova linha pré-paga sem sair de casa. Suporte rápido e seguro!',
    siteName: 'eSimFácil',
    images: [
      {
        url: '/assets/og/esimfacil.jpg',
        width: 800,
        height: 600,
        alt: 'eSimFácil card image',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eSimFácil | Compre e Ative seu eSIM Claro ou Vivo Online',
    description:
      'Adquira seu eSIM internacional com instalação instantânea e suporte 24/7. Conecte-se em mais de 190 países sem taxas de roaming.',
    images: ['/assets/og/esimfacil.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://vercel.live" />
        <link
          rel="preload"
          as="image"
          href="/assets/images/background-home.webp"
          type="image/webp"
        />
        <SchemaBreadcrumb />
      </Head>
      <body className={`${roboto.className} ${roboto.variable} flex flex-col min-h-screen`}>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="flex-grow">{children}</main>
        </Suspense>
        <ClientOnly>
          <CookieConsent />
        </ClientOnly>
        <Analytics />
        <CoreWebVitals />
      </body>
    </html>
  );
}
