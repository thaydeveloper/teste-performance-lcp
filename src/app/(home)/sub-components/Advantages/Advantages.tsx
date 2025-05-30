'use client';
import { FC, useMemo } from 'react';
import { ButtonCustom } from '@/shared';
import AdvantagesCard from './sub-components/AdvantagesCard';
import StepLine from './sub-components/StepLine';
import { ADVANTAGES } from '@/constants/advantages.constants';

const Advantages: FC = () => {
  const mobileCards = useMemo(
    () => ADVANTAGES.map((adv, idx) => <AdvantagesCard key={`mobile-${idx}`} {...adv} />),
    [],
  );

  const desktopCards = useMemo(
    () => (
      <>
        <div className="flex flex-col items-center w-full max-w-[420px] gap-8 md:gap-y-[180px]">
          {[ADVANTAGES[0], ADVANTAGES[2]].map((adv, idx) => (
            <AdvantagesCard key={`desktop-side-${idx}`} {...adv} />
          ))}
        </div>
        <StepLine />
        <div className="w-full flex justify-center md:pt-[260px]">
          <AdvantagesCard {...ADVANTAGES[1]} />
        </div>
      </>
    ),
    [],
  );

  return (
    <div
      className="container shadow-lg mx-auto pt-12 md:pt-[80px] pb-12 md:pb-[80px] mt-2 px-4 sm:px-6 md:px-10 max-w-[1117px]"
      id="advantages"
    >
      <header className="flex flex-col items-center gap-2 mb-3 sm:gap-4 md:mb-4">
        <h2 className="text-xl sm:text-2xl md:text-[32px] text-gray-800 font-bold text-center">
          Descubra as <span className="text-red-600">Vantagens do eSIM 5G</span>
        </h2>
      </header>

      <div className="flex flex-col items-center gap-2 mb-3 sm:gap-4 md:mb-4">
        {/* Mobile */}
        <div className="md:hidden flex w-full gap-x-3 sm:gap-x-4">
          <StepLine />
          <div className="flex flex-col gap-y-8 flex-grow items-center sm:items-start">
            {mobileCards}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-col md:flex-row items-start w-full gap-x-10">
          {desktopCards}
        </div>

        {/* Seção CTA */}
        <div className="w-full mt-12 md:mt-25  pb-10 flex flex-col items-center text-center px-4">
          <h2 className="text-gray-800 text-lg sm:text-xl md:text-xl lg:text-[28px] font-bold pb-10">
            Converse com nossos especialistas e escolha o melhor plano para suas necessidades!
          </h2>
          <ButtonCustom
            variant="tertiary"
            className="w-full max-w-md"
            aria-label="Fale conosco pelo WhatsApp"
          >
            Fale pelo WhatsApp agora!
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
