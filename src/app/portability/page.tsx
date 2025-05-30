import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: 'eSIM Fácil | Portabilidade eSIM',
  description:
    'Saiba como fazer a portabilidade do seu número para eSIM. Guia completo sobre portabilidade numérica.',
  keywords: [
    'portabilidade esim',
    'portar número esim',
    'como fazer portabilidade',
    'portabilidade numérica',
    'esim portabilidade',
  ],
  openGraph: {
    title: 'eSIM Fácil | Portabilidade eSIM',
    description: 'Guia completo sobre portabilidade de número para eSIM.',
    url: 'https://www.esimfacil.com/portability',
    images: [
      {
        url: '/assets/og/esimfacil.jpg',
        width: 1200,
        height: 630,
        alt: 'Portabilidade eSIM',
      },
    ],
  },
});

export { default } from './Portability.container';
