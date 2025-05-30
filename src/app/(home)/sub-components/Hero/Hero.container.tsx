import { FC } from 'react';
import Hero from './Hero';
import { Header } from '@/shared';

const HeroContainer: FC = () => {
  const description = 'Aqui você pode ativar seu eSIM e trocar de chip sem precisar sair de casa.';
  const buttonText = [
    { text: 'Nova linha com eSIM', href: '#new-esim' },
    { text: 'Trocar de chip agora', href: '#chip-change' },
  ];

  return (
    <>
      <Hero description={description} buttonText={buttonText} />
      <Header />
    </>
  );
};

export default HeroContainer;
