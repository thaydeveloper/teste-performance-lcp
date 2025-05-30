import { FC } from 'react';
import { HeroProps } from './Hero.interface';
import Image from 'next/image';
import { images } from '@shared/assets';
import { ButtonCustom } from '@/shared';

const Hero: FC<HeroProps> = ({ description, buttonText }) => {
  return (
    <div
      className="flex justify-center mb-20 items-center min-h-[690px] w-full relative z-10"
      style={{
        contain: 'layout paint',
        aspectRatio: '16/9',
        // Fundo gradiente temporário para o texto ser legível enquanto a imagem carrega
        background: 'linear-gradient(135deg, #0062cc 0%, #0A2540 100%)',
      }}
    >
      {/* Texto do Hero - Otimizado para ser o LCP */}
      <div
        className="w-full max-w-[791px] pt-[50px] absolute sm:top-[290px] left-1/2 transform -translate-x-1/2 rounded-[50px] flex flex-col justify-center items-center text-center text-white z-10"
        style={{
          // Garante que o conteúdo de texto seja grande e priorizado
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          fontWeight: 'bold',
          // Adiciona um sombreamento para garantir contraste mesmo após imagem carregar
          textShadow: '0 2px 10px rgba(0,0,0,0.7)',
          padding: '1rem',
        }}
      >
        <div className="w-full h-auto rounded-[50px] py-0 flex flex-col justify-center items-center">
          <h1 className="pb-2 text-4xl font-bold md:text-5xl leading-[1.2]">
            Bem-vindo a eSimFácil!
          </h1>
          <p className="mb-8 text-white sm:mb-16 text-2xl md:text-xl max-w-[80%]">{description}</p>
        </div>
        <div className="w-full md:w-[680px] flex flex-col md:flex-row gap-4 md:gap-10 p-0 justify-center items-center">
          {buttonText.map((btn, index) => (
            <ButtonCustom className="w-[300px]" key={index} variant="tertiary">
              <a href={btn.href} className="w-full h-full flex items-center justify-center">
                {btn.text}
              </a>
            </ButtonCustom>
          ))}
        </div>
      </div>

      {/* Imagem de fundo - Carregamento atrasado */}
      <Image
        src={images.backgroundHome}
        alt=""
        width={1920}
        height={1080}
        quality={60}
        // Configurações para atrasar o carregamento da imagem:
        loading="lazy"
        fetchPriority="low" // Explicitamente baixa prioridade
        decoding="async"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0, // Abaixo do z-10 do texto
          opacity: 0.9, // Ligeiramente transparente para melhorar legibilidade do texto
        }}
        aria-hidden="true"
        priority={false}
      />
    </div>
  );
};

export default Hero;
