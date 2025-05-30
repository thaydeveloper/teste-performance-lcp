import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: 'Dispositivos Compatíveis com eSIM | eSIM Fácil',
  description:
    'Verifique a lista completa de smartphones e dispositivos compatíveis com a tecnologia eSIM. Saiba se seu aparelho pode usar um eSIM.',
  keywords: [
    'dispositivos compatíveis esim',
    'celulares com esim',
    'smartphones esim',
    'compatibilidade esim',
    'lista de aparelhos esim',
    'eSIM',
  ],
  openGraph: {
    title: 'Dispositivos Compatíveis com eSIM | eSIM Fácil',
    description:
      'Confira a lista atualizada de dispositivos que suportam a tecnologia eSIM e prepare-se para sua próxima viagem.',
    url: 'https://www.esimfacil.com/devices-compatible',
    images: [
      {
        url: '/assets/og/esimfacil.jpg',
        width: 1200,
        height: 630,
        alt: 'Dispositivos Compatíveis com eSIM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dispositivos Compatíveis com eSIM | eSIM Fácil',
    description: 'Seu smartphone é compatível com eSIM? Descubra aqui a lista completa.',
    images: ['/assets/og/esimfacil.jpg'],
  },
});

export { default } from './DevicesCompatible.container';
