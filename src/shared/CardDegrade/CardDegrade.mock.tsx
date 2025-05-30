import React, { useState } from 'react';
import { CardDegradeMocks } from './CardDegrade.interface';

import { maskPhone } from '@/utils/maskPhone';
import { ButtonCustom, CheckboxInput, SelectInputContainer, TextInput } from '@/shared';
const regras = [
  'Você deve ter acesso ao chip físico da operadora atual.',
  'O número deve estar registrado como pré-pago, sem planos ativos.',
  'Não pode haver débitos ou pendências financeiras.',
  'O processo pode levar até 3 dias úteis.',
  'Pode ser necessário validar identidade e biometria.',
  'Você receberá uma linha provisória e a troca será concluída através do Claro Flex.',
];

const CardComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <div className="space-y-5 p-1 sm:p-2 md:p-4">
      <SelectInputContainer
        id="operadora_mock_fiel"
        label="Escolha sua operadora:"
        options={[
          { value: 'claro', label: 'Claro' },
          { value: 'vivo', label: 'Vivo' },
          { value: 'tim', label: 'TIM Brasil S.A.' },
          { value: 'nextel', label: 'Nextel (Agora Claro)' },
          { value: 'algar', label: 'Algar Telecom' },
          { value: 'correios', label: 'Correios Celular', disabled: true },
        ]}
        placeholder="Buscar operadora..."
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(selectedValue) => console.log('Mock Select Changed:', selectedValue)}
        noOptionsMessage="Ops, não encontramos essa operadora"
      />
      <TextInput
        id="numero_mock_fiel"
        label="Digite seu número:"
        placeholder="Digite seu número (ex: 91 9 9999-9999)"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <div className="flex items-center justify-end gap-2 text-center">
        <a
          href="#"
          className="text-sm text-white underline hover:text-red-200 inline-flex items-center"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          Analisar regras para a troca de chip!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 ml-1 text-white"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(203,213,225,0.5)' }}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
              <h3 className="text-lg font-bold mb-4 text-[#E60000]">Regras para a troca de chip</h3>
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
      <CheckboxInput
        id="termos_mock_fiel"
        label={
          <>
            Eu concordo com os{' '}
            <a
              href="/refund-policy"
              className="font-semibold underline hover:text-red-200"
              onClick={(e) => e.preventDefault()}
            >
              Termos e Condições!
            </a>
          </>
        }
        onChange={(e) => console.log('Mock Checkbox Changed:', e.target.checked)}
      />
      <div className="flex justify-center">
        <ButtonCustom variant="primary" onClick={() => console.log('Mock Button Clicked')}>
          Próximo passo
        </ButtonCustom>
      </div>
    </div>
  );
};

export const cardDegradeMocks: CardDegradeMocks = {
  padrao: {
    title: 'Título Padrão Mock',
    subtitle: 'Subtítulo padrão do mock para o card.',
    children: React.createElement(
      'p',
      { className: 'text-white p-4 text-center' },
      'Conteúdo children do mock padrão.',
    ),
  },
  gradienteInverso: {
    title: 'Gradiente Inverso Mock',
    subtitle: 'Este card usa a prop inverseGradient (mock).',
    inverseGradient: true,
    children: React.createElement(
      'p',
      { className: 'text-white p-4 text-center' },
      'Children com gradiente inverso (mock).',
    ),
  },
  semTituloOuSubtitulo: {
    children: React.createElement(
      'p',
      { className: 'text-white p-4 text-center' },
      'Card apenas com children (mock).',
    ),
  },
  comFormulario: {
    title: 'Troque pelo eSIM agora!',
    subtitle: 'Insira os dados abaixo para começar.',
    children: React.createElement(CardComponent),
  },
};
