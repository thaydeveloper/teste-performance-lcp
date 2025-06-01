'use client';
import React from 'react';
import styles from '../page.module.css';
import backgroundPortabilidade from '@public/assets/images/background-portabilidade.webp';
import CardAttention from './sub-components/CardAttention';
import SectionChangeChipContainer from './sub-components/SectionChangeChip';
import SectionFactory from '@/factories/SectionFactory';
import SectionDevicesCompatibility from './sub-components/SectionDevicesCompatibility/SectionDevicesCompatibility';
import RulesPortabilityContainer from './sub-components/SectionRulesPortability/RulesPortability.container';
import { Footer } from '@/shared';

const Portability: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div
        className={`bg-cover bg-center bg-no-repeat h-[625px] mb-10`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 38.82%, rgba(0,0,0,0.2) 64.47%, rgba(0,0,0,0) 100%), url(${backgroundPortabilidade})`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full p-4 text-white">
          <div className="p-6 sm:p-8 rounded-lg text-center w-full max-w-lg sm:max-w-[831px] md:min-h-[220px] flex flex-col justify-center items-center mt-10">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-4 leading-tight">
              Faça sua Portabilidade para <br className="hidden sm:block" />
              Claro eSIM agora!
            </h2>
            <p className="px-2 mb-6 text-base sm:text-lg md:text-xl">
              Garantimos sua troca de operadora sem complicações
            </p>
            <button
              className="bg-[#FF0000] text-white font-semibold py-3 px-6 rounded-[10px] border-2 border-white w-[250px] sm:w-[300px] h-[50px] sm:h-[60px] hover:bg-red-700 transition-colors duration-300"
              onClick={() => {
                console.log('Botão "Quero ir para Claro eSIM" clicado');
              }}
            >
              Quero ir para Claro eSIM
            </button>
          </div>
        </div>
      </div>
      <CardAttention />
      <div className="relative">
        <div className="relative shadow-xl mx-auto max-w-[1117px]">
          <SectionFactory id="devices" className="bg-white min-h-[550px]">
            <SectionChangeChipContainer />
          </SectionFactory>
        </div>
        <div className="relative shadow-xl mx-auto max-w-[1117px]">
          <SectionFactory id="devices" className="bg-white min-h-[550px]">
            <SectionDevicesCompatibility />
          </SectionFactory>
        </div>
        <div className="relative shadow-xl mx-auto max-w-[1117px]">
          <SectionFactory id="devices" className="bg-white min-h-[550px]">
            <RulesPortabilityContainer />
          </SectionFactory>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Portability;
