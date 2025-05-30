'use client';
import { FC } from 'react';
import { DevicesProps } from './Devices.interface';
import Link from 'next/link';

const Devices: FC<DevicesProps> = ({ devices }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10 pt-20">
      <div className="max-w-[835px] text-center">
        <h2 className="text-2xl sm:text-4xl sm:pt-[86px] font-bold text-center mb-2">
          Verifique a <span className="text-[var(--color-primary-light)]">Compatibilidade</span> do
          seu dispositivo
        </h2>
        <p className="text-lg sm:text-[24px] text-center text-[var(--color-black)] mb-6 pt-4">
          Confira a lista dos dispositivos compatíveis com eSIM
        </p>
      </div>

      <div className="w-full max-w-[835px] mx-auto shadow-xl rounded-lg flex flex-col items-center sm:mt-[51px] py-8 px-6">
        <div className="w-full max-w-[760px] mb-6 relative">
          <div className={`overflow-y-auto max-h-[380px] pr-4 flex flex-col gap-3`}>
            {devices.slice(0, 4).map((device) => (
              <div
                key={`${device.brand}-${device.devices.join()}`}
                className="bg-gray-200 rounded-lg px-4 py-3 text-gray-800 w-full min-h-[82px] flex items-center"
              >
                <div className="flex items-start w-full">
                  <span className="flex-shrink-0 mr-2 text-xl leading-tight mt-px">•</span>
                  <span className="text-sm leading-snug break-words sm:text-base">
                    {device.brand === 'Outros'
                      ? 'Google Pixel 3 e modelos mais recentes.'
                      : device.devices.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-0 w-1.5 pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[var(--color-gray-secondary)] rounded-full"></div>
            <div className="absolute right-0 top-0 h-12 w-1.5 bg-[var(--color-gray-secondary)] rounded-full"></div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-center text-gray-800 sm:pt-[40px] mb-6">
          Não encontrou o seu modelo? Consulte o manual do fabricante ou entre em contato para mais
          informações.
        </p>

        <Link
          href="/devices-compatible"
          className="border-2 sm:w-[346px] sm:h-[60px] flex items-center justify-center border-[var(--color-primary-light)] text-[var(--color-primary-light)] font-bold rounded-[10px] px-8 py-3 text-base hover:bg-red-50 transition text-center"
        >
          Ver lista completa de aparelhos
        </Link>
      </div>
    </div>
  );
};

export default Devices;
