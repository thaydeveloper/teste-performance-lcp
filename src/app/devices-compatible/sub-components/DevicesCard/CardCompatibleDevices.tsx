import { FC, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { DeviceBrand, DeviceModel } from '@/app/devices-compatible/DevicesCompatible.interface';
import openCard from '@public/assets/icons/open-card.webp';
import devices from '@public/assets/icons/devices.webp';

interface DevicesCardProps {
  brand: DeviceBrand;
}

const CardCompatibleDevices: FC<DevicesCardProps> = ({ brand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm mb-4 w-full sm:min-h-[96px] mx-auto">
      <div
        className="flex items-center justify-between p-6 cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center pt-2 ">
          <Image
            width={30}
            height={30}
            src={brand.icon || devices}
            alt={brand.name}
            className="w-12 h-12 mr-4"
          />{' '}
          <span className="sm:text-[24px] font-semibold text-[#262626]">{brand.name}</span>{' '}
        </div>
        <Image
          src={openCard}
          alt={isOpen ? 'Recolher' : 'Expandir'}
          className={`h-8 w-8 mt-3 text-red-500 transition-transform duration-200 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`}
          width={32}
          height={32}
        />
      </div>

      <div
        ref={contentRef}
        style={{
          height: isOpen ? height : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'height 0.3s ease, opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <div className="px-5 pt-2 pb-5 border-t border-gray-200">
          {brand.series.map((serie, idx) => (
            <div key={serie.id} className="mb-2">
              <span className="font-bold text-[#262626]">{serie.name}</span>
              {typeof serie.models === 'string' ? (
                <span className="text-[#262626] ml-2">{serie.models}</span>
              ) : (
                <ul className="pl-6 mt-1 list-disc">
                  {(serie.models as DeviceModel[]).map((model) => (
                    <li
                      key={model.id}
                      className={`text-gray-600 ${model.isCompatible ? '' : 'line-through text-gray-400'}`}
                    >
                      {model.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCompatibleDevices;
