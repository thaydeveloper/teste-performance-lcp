import '@/globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { CookieConsent } from '@/shared';
import { Suspense } from 'react';
import CoreWebVitals from '@/shared/CoreWebVitals';

import { SchemaBreadcrumb } from '@/SEO';
import Head from 'next/head';
import ClientOnly from '@/shared/ClientOnly';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'eSIM Fácil - Sua conexão em qualquer lugar do mundo',
  description: 'Compre seu eSIM e tenha internet em qualquer lugar do mundo',
  keywords: [
    'comprar eSIM Claro online',
    'ativar eSIM Vivo',
    'eSIM pré-pago',
    'trocar chip físico por eSIM',
    'eSIM para iPhone',
    'eSIM para Android',
    'eSIM para Samsung',
    'eSIM para Google Pixel',
    'eSIM para Motorola',
    'eSIM para Xiaomi',
    'eSIM para Huawei',
    'eSIM para OnePlus',
    'eSIM para Asus',
    'eSIM para Sony',
    'eSIM para Nokia',
    'eSIM para LG',
    'eSIM para Apple Watch',
    'eSIM para Samsung Watch',
    'eSIM para Google Pixel Watch',
    'eSIM para Motorola Watch',
    'eSIM para Xiaomi Watch',
    'eSIM para Huawei Watch',
    'eSIM para OnePlus Watch',
    'eSIM para Asus Watch',
    'eSIM para Sony Watch',
    'eSIM para Nokia Watch',
    'eSIM para LG Watch',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --font-roboto: ${roboto.style.fontFamily};
            }
            h1, h2, h3, h4, h5, h6 {
              font-display: swap;
              text-rendering: optimizeSpeed;
              -webkit-font-smoothing: antialiased;
            }
            .hero-container {
              contain: layout style paint;
              content-visibility: auto;
            }
          `,
          }}
        />
        <SchemaBreadcrumb />
      </Head>
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        <Suspense fallback={null}>
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
