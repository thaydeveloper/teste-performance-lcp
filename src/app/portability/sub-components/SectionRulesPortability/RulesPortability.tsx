'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import regras from '@public/assets/images/regras.webp';

const RulesPortability: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ phoneNumber, currentOperator, agreedToTerms });
  };

  return (
    <section className="py-12 pt-20 bg-[#ffffff] flex flex-col items-center">
      {/* Container do Título e Descrição */}
      <div className="w-full max-w-[948px] text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#FF0000]">Regras</span>{' '}
          <span className="text-[#262626]">para Portabilidade</span>
        </h2>
        <p className="text-lg text-gray-600">
          A portabilidade é um direito seu, garantido por lei, que permite mudar de operadora sem
          perder o número. Veja as principais regras para a portabilidade ocorrer:
        </p>
      </div>

      <div className="mt-6 pb-40 flex items-center justify-center p-3 w-full">
        {regras ? (
          <Image
            src={regras}
            alt="Regras para portabilidade"
            className="max-w-[997px] w-full h-auto"
            priority
            width={997}
            height={500}
          />
        ) : (
          <p>Imagem de regras não disponível.</p>
        )}
      </div>
    </section>
  );
};

export default RulesPortability;
