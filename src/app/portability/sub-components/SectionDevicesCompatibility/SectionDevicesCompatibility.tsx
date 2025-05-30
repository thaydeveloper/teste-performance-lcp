import { deviceLists } from './sub-components/DevicesCard/devices.constants';
import DevicesCard from './sub-components/DevicesCard/DevicesCard';
import React, { useState } from 'react';

const SectionDevicesCompatibility: React.FC = () => {
  const [openCard, setOpenCard] = useState<'APPLE' | 'ANDROID' | 'GOOGLE' | null>(null);

  const handleToggle = (brandName: 'APPLE' | 'ANDROID' | 'GOOGLE') => {
    setOpenCard((prevOpenCard) => (prevOpenCard === brandName ? null : brandName));
  };

  return (
    <section className="py-12 md:py-24 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FF0000] mb-4">
          Dispositivos Compatíveis <span className="text-[#262626]">com eSIM</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg w-full max-w-[933px] mx-auto px-4 sm:px-8 md:px-20 text-gray-600 text-center mb-8 sm:mb-10 md:mb-12">
          Confira abaixo os principais dispositivos compatíveis com eSIM. Esses aparelhos permitem
          ativar a linha diretamente no chip virtual sem precisar de um chip físico.
        </p>

        <div className="mb-8 sm:mb-10 md:mb-12 px-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center md:text-left">
            Compatibilidade com eSIM:
          </h3>
          <div className="space-y-4 mx-auto">
            {['APPLE', 'ANDROID', 'GOOGLE'].map((brand) => (
              <DevicesCard
                key={brand}
                brandName={brand as 'APPLE' | 'ANDROID' | 'GOOGLE'}
                devices={deviceLists[brand as keyof typeof deviceLists]}
                isOpen={openCard === brand}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        <div className="text-center mx-auto pb-8 sm:pb-20 md:pb-30">
          <button className="px-6 sm:px-8 py-3 w-full max-w-[346px] h-[60px] border border-[#FF0000] text-[#FF0000] font-semibold rounded-lg hover:bg-[#FF0000] hover:text-white transition-colors">
            Ver lista completa de aparelhos
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionDevicesCompatibility;
