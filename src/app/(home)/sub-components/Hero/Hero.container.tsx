'use client';
import React from 'react';
import Hero from './Hero';
import { Header } from '@/shared';

const HeroContainer = () => {
  const description = 'Aqui você pode ativar seu eSIM e trocar de chip sem precisar sair de casa.';
  const buttonText = [
    {
      text: 'Comprar Agora',
      href: '#',
    },
  ];

  return (
    <>
      <Hero description={description} buttonText={buttonText} />
      <Header />
    </>
  );
};

export default HeroContainer;
