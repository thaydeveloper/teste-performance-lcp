'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { images } from '@shared/assets';
import { ButtonCustom } from '@/shared';

interface HeroProps {
  description?: string;
  buttonText?: Array<{
    text: string;
    href: string;
  }>;
}

const Hero: FC<HeroProps> = ({ description, buttonText }) => {
  return (
    <div
      className="flex justify-center mb-20 items-center min-h-[690px] w-full relative z-10 "
      style={{
        contain: 'layout paint',
        aspectRatio: '16/9',
        backgroundColor: '#ffffff',
      }}
    >
      <Image
        src={images.backgroundHome}
        alt="Pessoa usando aplicativo de eSIM no celular"
        width={1920}
        height={1080}
        priority={true}
        quality={70}
        fetchPriority="high"
        decoding="async"
        loading="lazy"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <div className="w-full max-w-[791px] h-auto absolute pt-[50px] sm:top-[290px] left-1/2 transform -translate-x-1/2 rounded-[50px] flex flex-col justify-center items-center text-center text-white ">
        <div className="w-full h-auto rounded-[50px] py-0 flex flex-col justify-center items-center">
          <h1 className="pb-2 text-3xl font-bold md:text-4xl line-height-10">
            Bem-vindo a eSimFácil!
          </h1>
          <p className="mb-8 sm:mb-16 text-[24px] md:text-xl">{description}</p>
        </div>
        <div className="w-full md:w-[680px] flex flex-col md:flex-row gap-4 md:gap-10 p-0 justify-center items-center">
          {buttonText?.map((btn, index) => (
            <ButtonCustom className="w-[300px]" key={index} variant="tertiary">
              <a href={btn.href} className="w-full h-full flex items-center justify-center">
                {btn.text}
              </a>
            </ButtonCustom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
