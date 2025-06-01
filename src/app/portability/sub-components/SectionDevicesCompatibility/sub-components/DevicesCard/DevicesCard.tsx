import React from 'react';
import Image from 'next/image';
import devices from '@public/assets/icons/devices.webp';
import { brandDetails } from './devices.constants';
import openCard from '@public/assets/icons/open-card.webp';

interface DevicesCardProps {
  brandName: 'APPLE' | 'ANDROID' | 'GOOGLE';
  devices: string[];
  isOpen: boolean;
  onToggle: (brandName: 'APPLE' | 'ANDROID' | 'GOOGLE') => void;
}

const DevicesCard: React.FC<DevicesCardProps> = ({ brandName, devices, isOpen, onToggle }) => {
  const currentBrand = brandDetails[brandName];

  const logoSrc = currentBrand?.logo || devices;
  const altText = currentBrand?.alt || 'Brand Logo';

  return (
    <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm mb-4 w-full sm:min-h-[96px] mx-auto">
      <div
        className="flex items-center justify-between p-6 cursor-pointer "
        onClick={() => onToggle(brandName)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle(brandName)}
      >
        <div className="flex items-center pt-2 ">
          <Image width={30} height={30} src={logoSrc} alt={altText} className="h-12 w-12 mr-4" />{' '}
          <span className="sm:text-[24px] font-semibold text-[#262626]">{brandName}</span>{' '}
        </div>
        <Image
          src={openCard}
          alt={isOpen ? 'Recolher' : 'Expandir'}
          className={`h-8 w-8 mt-3 text-red-500 transition-transform duration-200 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`}
          width={32}
          height={32}
        />
      </div>

      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t border-gray-200">
          {devices.map((deviceLine, index) => (
            <p
              key={index}
              className="text-[20px] font-bold text-[#262626] py-2.5 border-b border-gray-100 last:border-b-0"
            >
              {deviceLine}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevicesCard;
