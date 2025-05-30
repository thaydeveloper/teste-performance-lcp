'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { dddsMap, estadosBrasileiros } from '@/constants/options.constants';
import { icons, images } from '@/shared/assets';
import { ButtonCustom, CardDegrade, CheckboxInput, SelectInputContainer } from '@/shared';
import { SelectOption } from '@/shared/SelectCard/select.interface';

const NewEsim: React.FC = () => {
  const [selectedState, setSelectedState] = useState<SelectOption | undefined>(undefined);
  const [selectedDdd, setSelectedDdd] = useState<SelectOption | undefined>(undefined);
  const [ddds, setDdds] = useState<SelectOption[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = (option: SelectOption) => {
    setSelectedState(option);
    setSelectedDdd(undefined);
    setDdds(dddsMap[option.value as keyof typeof dddsMap] || []);
  };

  const handleDddChange = (option: SelectOption) => {
    setSelectedDdd(option);
  };

  const handleButtonClick = () => {
    if (!selectedState || !selectedDdd || !termsAccepted) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    window.open(
      'https://seguro.esimfacil.com/checkout/154377328:1',
      '_blank',
      'noopener,noreferrer',
    );
  };

  useEffect(() => {
    if (selectedState && selectedDdd) {
      setShowAlert(false);
    }
  }, [selectedState, selectedDdd, termsAccepted]);

  const regras = [
    'Você deve ter acesso ao chip físico da operadora atual.',
    'O número deve estar registrado como pré-pago, sem planos ativos.',
    'Não pode haver débitos ou pendências financeiras.',
    'O processo pode levar até 3 dias úteis.',
    'Pode ser necessário validar identidade e biometria.',
    'Você receberá uma linha provisória e a troca será concluída através do Claro Flex.',
  ];

  return (
    <section
      className="relative w-full min-h-[990px] flex flex-col items-center"
      aria-labelledby="welcome-title"
    >
      {/* Header vermelho */}
      <div className="w-full bg-[#E60000] py-6">
        <h1
          id="welcome-title"
          className="text-center text-white text-2xl sm:text-4xl font-bold max-w-[1117px] mx-auto"
        >
          Bem-vindo à eSimFacil! - Tecnologia sem Fronteiras
        </h1>
      </div>

      {/* Conteúdo principal */}
      <div className="container px-4 max-w-[1117px] flex flex-col items-center py-8 space-y-8">
        {/* Título com destaque */}
        <div className="text-center space-y-2 max-w-[669px]">
          <h2 className="text-xl sm:text-3xl text-[#262626] font-bold">
            Chip virtual <span className="text-[#E60000] font-bold">PRÉ-PAGO</span> com{' '}
            <span className="text-[#E60000] font-bold">NOVA LINHA</span>
          </h2>
          <h3 className="text-xl sm:text-3xl text-[#262626] font-bold">em minutos!</h3>
          <p className="text-gray-600 mt-4 text-[24px]">
            Experimente a liberdade e agilidade do eSIM
          </p>
        </div>

        {/* Card de Ativação */}
        <div className="flex items-center justify-center w-full">
          <div className="w-[586px]">
            <CardDegrade
              title="Ative o seu eSIM agora!"
              subtitle="Por favor, escolha um estado para começar."
              className="mx-auto"
            >
              <div className="space-y-4">
                <SelectInputContainer
                  id="estado"
                  label="Escolha o estado para ativar seu eSIM:"
                  options={estadosBrasileiros}
                  placeholder="Digite ou selecione um estado..."
                  onChange={(selectedValue) => {
                    setSelectedState(estadosBrasileiros.find((opt) => opt.value === selectedValue));
                    setSelectedDdd(undefined);
                    setDdds(dddsMap[selectedValue as keyof typeof dddsMap] || []);
                  }}
                  value={selectedState?.value}
                />
                <SelectInputContainer
                  id="ddd"
                  label="Escolha o DDD para sua nova linha eSIM:"
                  options={ddds}
                  placeholder="Digite ou selecione um DDD..."
                  onChange={(selectedValue) =>
                    setSelectedDdd(ddds.find((opt) => opt.value === selectedValue))
                  }
                  value={selectedDdd?.value}
                  disabled={
                    !selectedState ||
                    ddds.length === 0 ||
                    (!estadosBrasileiros.find((est) => est.value === selectedState?.value) &&
                      !selectedState?.label)
                  }
                  onFocus={() => setSelectedDdd(undefined)}
                />
                <div
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-end gap-2 pt-2 text-center cursor-pointer"
                >
                  <a className="text-sm text-white underline hover:text-red-200">
                    Analise regras para a troca de chip!
                  </a>
                  <Image
                    src={icons.arrowRightWhite}
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
                <div className="flex justify-center">
                  <ButtonCustom
                    variant={
                      !selectedState || !selectedDdd || !termsAccepted ? 'disabled' : 'secondary'
                    }
                    className="w-[260px] sm:w-[300px]"
                    onClick={handleButtonClick}
                    disabled={!selectedState || !selectedDdd || !termsAccepted}
                  >
                    Ativar meu eSIM!
                  </ButtonCustom>
                </div>
                {showAlert && (
                  <div className="flex justify-center w-full">
                    <div className="p-3 mt-2 text-sm text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500 rounded shadow-lg">
                      Por favor, selecione o estado, o DDD e aceite os termos antes de avançar.
                    </div>
                  </div>
                )}
              </div>
            </CardDegrade>
          </div>
        </div>

        {/* Logo Bar */}
        <div className="flex justify-center w-full mt-4 sm:mt-8">
          <Image
            src={images.companies}
            alt="Reclame Aqui"
            width={406}
            height={72}
            className="object-contain max-w-full"
            loading="lazy"
            fetchPriority="auto"
            decoding="async"
          />
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-1000"
          style={{ background: 'rgba(203,213,225,0.5)' }}
        >
          <div className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative `}>
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
    </section>
  );
};

export default NewEsim;
