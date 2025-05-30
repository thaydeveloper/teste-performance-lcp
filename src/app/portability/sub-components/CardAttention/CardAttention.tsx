import React from 'react';

const CardAttention: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#E60000_0%,_#800000_100%)] w-full max-w-[380px] sm:max-w-[1279px]  text-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mx-auto my-4 sm:my-6 lg:my-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-[43px] font-bold tracking-wider">ATENÇÃO!</h2>
        <hr className="border-t-2 border-white w-48 sm:w-64 lg:w-80 mx-auto my-1" />
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold pt-2 sm:pt-3 px-2">
          Assinatura do Claro Flex durante a Portabilidade
        </h3>
      </div>
      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base px-2 sm:px-0">
        <p className="leading-relaxed">
          Durante o procedimento de portabilidade, é necessário que você assine o plano Claro Flex
          para ativar sua linha de forma correta. O Claro Flex é um plano pré-pago da Claro que
          oferece <strong className="font-bold">16GB de internet</strong> além de{' '}
          <strong className="font-bold">WhatsApp e Instagram ilimitados</strong>.
        </p>
        <p className="leading-relaxed">
          A assinatura é <strong className="font-bold">essencial</strong> para concluir a
          portabilidade. Como qualquer plano pré-pago, não há contratos de fidelidade, o que
          significa que você pode <strong className="font-bold">cancelar o Claro Flex</strong> a
          qualquer momento após a ativação diretamente no aplicativo. Isso garante que sua
          portabilidade seja concluída <strong className="font-bold">sem interrupções</strong> e com{' '}
          <strong className="font-bold">todos os benefícios da Claro Flex</strong>.
        </p>
      </div>
    </div>
  );
};

export default CardAttention;
