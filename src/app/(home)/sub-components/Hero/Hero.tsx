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
      <div className="w-full max-w-[791px] pt-[50px] flex flex-col justify-center items-center text-center text-white z-10">
        <div className="w-full h-auto rounded-[50px] py-0 flex flex-col justify-center items-center">
          <h1 className="pb-2 text-2xl font-bold md:text-5xl leading-[1.2] sm:whitespace-normal whitespace-wrap text-center">
            Bem-vindo a eSimFácil!
          </h1>
          <h1 className="pb-2 text-2xl font-bold md:text-5xl leading-[1.2] sm:whitespace-normal whitespace-wrap text-center">
            A Nº1 do Brasil em ativação de eSIM
          </h1>

          <p className="mb-8 text-white sm:mb-16 text-base md:text-xl max-w-[80%]">{description}</p>
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

      {/* Imagem de fundo - Otimizada */}
      <Image
        src={images.backgroundHome}
        alt="Background da página inicial"
        width={1920}
        height={1080}
        quality={75}
        priority={true}
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.9,
        }}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU4OjpAQEBAPj4+QEBAPj4+QEBAPj4+QED/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
};

export default Hero;
