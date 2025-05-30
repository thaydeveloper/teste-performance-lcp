'use client';

import React from 'react';
import { CardDegradeProps } from './CardDegrade.interface';

const CardDegrade: React.FC<CardDegradeProps> = ({
  title,
  subtitle,
  className = '',
  children,
  inverseGradient = false,
}) => {
  return (
    <div
      className={`relative rounded-[10px] py-5 px-5 w-full max-w-[400px] sm:py-8 sm:mb-6 sm:max-w-[586px] ${className} flex flex-col mx-auto`}
      style={{
        background: inverseGradient
          ? 'linear-gradient(180deg, #800000 0%, #E60000 100%)'
          : 'linear-gradient(180deg, #E60000 0%, #800000 100%)',
      }}
    >
      <div className={`flex flex-col space-y-4 sm:space-y-6`}>
        {(title || subtitle) && (
          <div className="text-center space-y-1 sm:space-y-2 w-full mx-auto">
            {title && (
              <h2 className={`text-xl sm:text-2xl font-bold text-white mx-auto`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`text-xs sm:text-sm sm:text-base text-white opacity-90`}>{subtitle}</p>
            )}
          </div>
        )}

        {children && <div className="w-full">{children}</div>}
      </div>
    </div>
  );
};

export default CardDegrade;
