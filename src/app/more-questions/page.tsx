import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  title: 'eSIM Fácil | Dúvidas Frequentes sobre eSIM',
  description:
    'Encontre respostas detalhadas sobre compatibilidade, uso internacional, configurações e limitações dos planos eSIM.',
  keywords: [
    'perguntas sobre esim',
    'duvidas sobre esim',
    'como funciona esim',
    'esim compatibilidade',
    'ajuda esim',
    'faq esim avançado',
  ],
  openGraph: {
    title: 'eSIM Fácil | Dúvidas Frequentes sobre eSIM',
    description:
      'Tire dúvidas mais técnicas sobre o uso do seu eSIM em diferentes países e dispositivos.',
    url: 'https://www.esimfacil.com/more-questions',
    images: [
      {
        url: '/assets/og/esimfacil.jpg',
        width: 1200,
        height: 630,
        alt: 'Dúvidas Frequentes eSIM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eSIM Fácil | Dúvidas Frequentes sobre eSIM',
    description:
      'Encontre respostas detalhadas sobre compatibilidade, uso internacional, configurações e limitações dos planos eSIM.',
    images: ['/assets/og/esimfacil.jpg'],
  },
});

export { default } from './MoreQuestions.container';
