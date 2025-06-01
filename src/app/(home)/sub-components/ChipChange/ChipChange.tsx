'use client';
import { useState, useCallback, useMemo } from 'react';
import CardDegrade from '@/shared/CardDegrade';
import designBackground1 from '@public/assets/images/design-background-1.webp';
import designBackground2 from '@public/assets/images/design-background-2.webp';
import { maskPhone } from '@/utils/maskPhone';
import Image from 'next/image';
import arrowRightWhite from '@public/assets/icons/arrow-right-white.webp';

import { operatorOptions } from '@/constants/options.constants';
import { ButtonCustom, CheckboxInput, SelectInputContainer, TextInput } from '@/shared';

const REGRAS = [
  'Você deve ter acesso ao chip físico da operadora atual.',
  'O número deve estar registrado como pré-pago, sem planos ativos.',
  'Não pode haver débitos ou pendências financeiras.',
  'O processo pode levar até 3 dias úteis.',
  'Pode ser necessário validar identidade e biometria.',
  'Você receberá uma linha provisória e a troca será concluída através do Claro Flex.',
];

const ChipChangeSection: React.FC = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePhoneChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(maskPhone(event.target.value));
  }, []);

  const handleSubmitForm = useCallback(() => {
    const isValid = selectedOperator && phone && termsAccepted;
    setShowAlert(!isValid);

    if (isValid) {
      console.log('Formulário enviado:', { selectedOperator, phone, termsAccepted });
      // Adicionar lógica de submit aqui
    }
  }, [selectedOperator, phone, termsAccepted]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const isFormValid = useMemo(
    () => selectedOperator && phone && termsAccepted,
    [selectedOperator, phone, termsAccepted],
  );

  return (
    <section className="relative w-full min-h-[700px] sm:min-h-[900px] flex flex-col items-center pb-10">
      {/* Header Section */}
      <div className="relative w-full flex flex-col items-center h-[362px] bg-[#E60000] sm:pt-[30px] overflow-hidden pb-10">
        <Image
          src={designBackground1}
          alt="design esquerda new esim"
          className="absolute top-0 z-0 hidden w-auto h-auto sm:block left-10"
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={45}
          height={163}
        />
        <Image
          src={designBackground2}
          alt="design direita new esim"
          className="absolute top-0 z-0 hidden w-auto h-auto sm:block right-10"
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={45}
          height={163}
        />

        <h2 className="w-11/12 max-w-[778px] text-white text-3xl sm:text-4xl font-bold text-center pt-4 mb-3">
          TROQUE seu CHIP FÍSICO pelo eSIM agora!
        </h2>
        <p className="mb-10 text-xl text-center text-white sm:text-2xl">
          Ative com apenas alguns passos.
        </p>
      </div>

      {/* Card Section */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1117px] mx-auto -mt-[210px]">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[586px] sm:pt-[50px] pb-10">
            <CardDegrade
              title="Troque pelo eSIM agora!"
              subtitle="Insira os dados abaixo para começar."
              inverseGradient
            >
              <div className="space-y-4">
                <SelectInputContainer
                  id="operadora"
                  label="Escolha sua operadora:"
                  options={operatorOptions}
                  value={selectedOperator}
                  onChange={(selectedValue) => setSelectedOperator(selectedValue as string)}
                />

                <TextInput
                  id="numero"
                  label="Digite seu número:"
                  type="tel"
                  placeholder="Digite seu número (ex: (91) 99999-9999)"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                />

                <div
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-end gap-2 pt-2 text-center cursor-pointer"
                >
                  <a
                    className="text-sm text-white underline hover:text-red-200"
                    aria-label="Analise regras para a troca de chip"
                  >
                    Analise regras para a troca de chip!
                  </a>
                  <Image
                    src={arrowRightWhite}
                    loading="lazy"
                    fetchPriority="auto"
                    decoding="async"
                    alt="Informações"
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                </div>

                <div className="flex justify-center">
                  <CheckboxInput
                    id="termos_esim"
                    label={
                      <>
                        Eu concordo com os{' '}
                        <a
                          href="/refund-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline hover:text-gray-200"
                          aria-label="Termos e Condições"
                        >
                          Termos e Condições
                        </a>
                        !
                      </>
                    }
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <ButtonCustom
                    onClick={handleSubmitForm}
                    className="w-[300px]"
                    disabled={!isFormValid}
                    variant={isFormValid ? 'primary' : 'disabled'}
                  >
                    Próximo passo
                  </ButtonCustom>

                  {showAlert && (
                    <div className="p-3 text-sm text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500 rounded shadow-lg">
                      Por favor, preencha todos os campos e aceite os termos antes de avançar.
                    </div>
                  )}
                </div>
              </div>
            </CardDegrade>

            {/* Modal de Regras */}
            {showModal && (
              <div
                className="fixed inset-0 flex items-center justify-center z-[1000] bg-slate-200/50 backdrop-blur-sm"
                onClick={handleCloseModal}
              >
                <div
                  className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative mx-4`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-bold mb-4 text-[#E60000]">
                    Regras para a troca de chip
                  </h3>
                  <ol className="space-y-3 text-gray-800">
                    {REGRAS.map((regra, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="font-bold text-[#E60000] mr-2">{idx + 1}.</span>
                        <span>{regra}</span>
                      </li>
                    ))}
                  </ol>
                  <button
                    className="mt-6 w-full bg-[#E60000] text-white py-2 rounded hover:bg-[#b30000] font-semibold cursor-pointer transition-colors"
                    onClick={handleCloseModal}
                    aria-label="Fechar modal"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChipChangeSection;
