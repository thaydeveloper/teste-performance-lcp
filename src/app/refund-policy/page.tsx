import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: 'eSIM Fácil | Política de Reembolso',
  description:
    'Saiba como funciona a política de reembolso da eSIM Fácil. Entenda prazos, critérios e como solicitar.',
  keywords: [
    'reembolso esim',
    'politica de reembolso chip',
    'cancelamento esim',
    'garantia esim',
    'direito do consumidor',
  ],
  openGraph: {
    title: 'eSIM Fácil | Política de Reembolso',
    description: 'Informações claras sobre cancelamento e reembolso de planos eSIM.',
    url: 'https://www.esimfacil.com/refund-policy',
    images: [
      {
        url: '/assets/og/esimfacil.jpg',
        width: 1200,
        height: 630,
        alt: 'Política de Reembolso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eSIM Fácil | Política de Reembolso',
    description: 'Informações claras sobre cancelamento e reembolso de planos eSIM.',
    images: ['/assets/og/esimfacil.jpg'],
  },
});

export { default } from './RefundPolicy.container';
