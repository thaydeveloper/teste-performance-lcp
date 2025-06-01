'use client';
import { FC } from 'react';
import Image from 'next/image';

import backgroundDevices from '@public/assets/images/background-devices.webp';
import warning from '@public/assets/icons/warning.webp';
import Link from 'next/link';
import { DevicesCompatibleProps } from './DevicesCompatible.interface';
import CardCompatibleDevices from './sub-components/DevicesCard/CardCompatibleDevices';

const DevicesCompatible: FC<DevicesCompatibleProps> = ({ brands, title, subtitle }) => {
  return (
    <div className="relative ">
      {/* Seção de imagem de fundo */}
      <section
        className="relative min-h-[650px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundDevices})`,
        }}
      >
        <div className="container pt-20 w-full max-w-[1036px] text-center transition-all ease-out">
          <h2 className="text-3xl sm:text-5xl text-[#FFFFFF] font-bold">{title}</h2>
          <p className="text-[#FFFFFF] text-center lg:text-[20px] sm:text-2xl mt-4 px-4 sm:px-16 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Container para dispositivos compatíveis */}
      <div className="relative bg-white pt-10 mx-auto shadow-lg md:max-w-[1116px] md:min-h-[1500px] px-4 -mt-20 rounded-[10px] ">
        <div className="container mx-auto max-w-[1036px]">
          <div className="grid grid-cols-1 gap-4 pb-10">
            {brands &&
              brands.map((brand) => <CardCompatibleDevices key={brand.id} brand={brand} />)}
          </div>

          {/* Container de atenção  */}
          <div className="max-w-[900px] mx-auto mb-8">
            <div className="flex items-start justify-center mb-8">
              <Image
                src={warning}
                alt="Atenção"
                width={24}
                height={24}
                className="flex-shrink-0 sm:ml-10 "
              />
              <p className="text-[#262626]  text-sm sm:text-base text-center">
                {' '}
                {/* Alterado de text-left para text-center */}
                <span className="text-[#FF0000] font-bold mr-1">ATENÇÃO:</span>
                Caso não tenha encontrado seu dispositivo nesta lista, entre em contato com nosso
                suporte para verificar a compatibilidade ou acesse o FAQ para obter mais informações
                sobre o funcionamento do eSIM e como ativá-lo em seu dispositivo.
              </p>
            </div>
          </div>
          {/* Botões */}
          <div className="flex flex-col items-center justify-center gap-4 pb-10">
            <Link
              href="/"
              className="w-full max-w-[350px] h-[60px] bg-[#FF0000] text-white rounded-lg text-base md:text-lg font-semibold flex items-center justify-center"
            >
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesCompatible;
