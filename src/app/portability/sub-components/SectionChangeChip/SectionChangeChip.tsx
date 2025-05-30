'use client';
import React, { useState } from 'react';
import { icons } from '@/shared/assets';
import Image from 'next/image';

const regras = [
  'Você deve ter acesso ao chip físico da operadora atual.',
  'O número deve estar registrado como pré-pago, sem planos ativos.',
  'Não pode haver débitos ou pendências financeiras.',
  'O processo pode levar até 3 dias úteis.',
  'Pode ser necessário validar identidade e biometria.',
  'Você receberá uma linha provisória e a troca será concluída através do Claro Flex.',
];

// Função de máscara de telefone (padrão brasileiro)
const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11); // Limita a 11 dígitos
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, '($1');
  if (digits.length <= 7) return digits.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
};

const SectionChangeChip: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Validação: telefone deve ter 15 caracteres (formato (99) 99999-9999)
  const isPhoneValid = phoneNumber.replace(/\D/g, '').length === 11;
  const isFormValid = isPhoneValid && currentOperator && agreedToTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log({ phoneNumber, currentOperator, agreedToTerms });
  };

  return (
    <section className="py-12 pt-20 bg-[#ffffff] flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-[586px] mx-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mx-auto mb-2 max-w-[351px]">
          Portabilidade de número para Claro com eSIM
        </h2>
        <p className="text-center text-gray-600 mb-6 max-w-[495px] mx-auto text-sm sm:text-base">
          Siga os passos para concluir a portabilidade e ativar sua linha pré-paga!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="phoneNumber" className="block mb-1 text-sm font-bold text-gray-700">
              Digite seu número atual:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(maskPhone(e.target.value))}
              placeholder="Digite seu número (ex: 91 9 9999-9999)"
              className="w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              maxLength={15}
            />
          </div>

          <div>
            <label htmlFor="currentOperator" className="block mb-1 text-sm font-bold text-gray-700">
              Operadora Atual:
            </label>
            <div className="relative">
              <select
                id="currentOperator"
                name="currentOperator"
                value={currentOperator}
                onChange={(e) => setCurrentOperator(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md appearance-none focus:ring-red-500 focus:border-red-500"
              >
                <option value="" disabled>
                  Selecione sua operadora atual...
                </option>
                <option value="claro">Claro</option>
                <option value="vivo">Vivo</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mb-4 text-right">
            <button
              type="button"
              className="text-sm flex gap-2 text-[#E60000] hover:text-red-700 font-bold"
              onClick={() => setShowModal(true)}
            >
              Analisar regras para a Portabilidade!
              <Image src={icons.arrowRight} alt="Atenção" width={20} height={20} className="mr-2" />
            </button>
          </div>

          <div className="flex items-start gap-3">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 text-red-600 border-gray-300 rounded focus:ring-red-500 flex-shrink-0"
            />
            <label htmlFor="terms" className="text-sm text-gray-700 leading-tight">
              Confirmo que li e aceito as Regras de Portabilidade.
            </label>
          </div>

          <div className="relative flex justify-center w-full">
            <button
              type="submit"
              className={`w-full sm:w-[300px] shadow-xl bg-[#FF0000] text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out ${!isFormValid ? 'cursor-not-allowed opacity-60' : 'hover:bg-red-700 cursor-pointer'}`}
              disabled={!isFormValid}
              onMouseEnter={() => {
                if (!isFormValid) setShowTooltip(true);
              }}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Próximo passo
            </button>
            {!isFormValid && showTooltip && (
              <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-3 py-2 shadow-lg z-20 whitespace-nowrap">
                Preencha todos os campos corretamente para continuar
              </div>
            )}
          </div>
        </form>
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(203,213,225,0.5)' }}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-slide-down">
              <h3 className="text-lg font-bold mb-4 text-[#E60000]">Regras para a Portabilidade</h3>
              <ol className="space-y-3 text-gray-800">
                {regras.map((regra, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="font-bold text-[#E60000] mr-2">{idx + 1}.</span>
                    <span>{regra}</span>
                  </li>
                ))}
              </ol>
              <button
                className="mt-6 w-full bg-[#E60000] text-white py-2 rounded hover:bg-[#b30000] font-semibold cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center justify-center text-sm text-[#262626] p-3 w-full max-w-[586px] mx-4">
        <Image
          src={icons.warning}
          alt="Atenção"
          width={30}
          height={30}
          className="mr-2 flex-shrink-0"
        />
        <span className="font-bold">
          ATENÇÃO: Antes de seguir com a compra, verifique se o seu dispositivo é compatível com
          eSIM.
        </span>
      </div>
    </section>
  );
};

export default SectionChangeChip;
