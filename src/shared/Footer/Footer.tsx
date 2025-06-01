'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';

import footerLogo from '@public/assets/images/footer-logo.webp';
import instagram from '@public/assets/icons/instagram.webp';
import X from '@public/assets/icons/X.webp';
import email from '@public/assets/icons/email.webp';
import sites from '@public/assets/images/sites.webp';

import Link from 'next/link';
import { EMAIL_URL } from '@/constants/general.constants';

const Footer: FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [language, setLanguage] = useState('pt-BR');

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };

  return (
    <React.Fragment>
      <footer className="w-full bg-[#000000] py-10">
        <div className="container flex flex-col items-center justify-between px-4 mx-auto lg:items-start sm:px-8 lg:flex-row">
          <div className="pb-8 lg:mb-0">
            <Image
              src={footerLogo}
              alt="eSIM Logo"
              width={150}
              height={50}
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              quality={75}
              sizes="(max-width: 768px) 100px, 150px"
            />
          </div>

          <div className="flex flex-col items-center w-full gap-8 mb-8 lg:items-start lg:flex-row lg:gap-16 lg:w-auto lg:mb-0">
            <div className="w-full text-center lg:text-left sm:w-auto">
              <h3 className="text-[#ff2626] font-bold text-lg mb-4 border-b border-[#FFFFFF] pb-2 w-full sm:w-[300px]">
                Informações de Políticas
              </h3>
              <ul className="space-y-2">
                <li className="flex flex-col space-y-2">
                  <a
                    href="#"
                    onClick={handlePrivacyClick}
                    className="text-white hover:text-gray-300"
                  >
                    Políticas de Privacidade
                  </a>
                  <Link
                    href="/refund-policy"
                    className="text-white hover:text-[#FF2626] transition-all"
                  >
                    Política de Reembolso
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full text-center lg:text-left sm:w-auto">
              <h3 className="text-[#FF2626] font-bold text-lg mb-4 border-b border-[#FFFFFF] pb-2 w-full sm:w-[300px]">
                Entre em Contato
              </h3>
              <ul className="space-y-2">
                <li className="flex flex-col space-y-2">
                  <a
                    href={`mailto:${EMAIL_URL}`}
                    className="text-white break-all hover:text-gray-300"
                  >
                    Email: Suporte@esimfacil.com
                  </a>
                  <a
                    href="https://wa.me/5511993034618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF2626] transition-all"
                  >
                    Suporte via WhatsApp: (11) 99303-4618
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-8 text-white sm:px-8">
          <div className="flex justify-center pb-6 space-x-4 lg:justify-start">
            <a
              href="https://www.instagram.com/esimfacil?igsh=Zjdza3dlZHBqcnUy"
              aria-label="Instagram"
              id="footer-social-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt="Instagram"
                width={32}
                height={32}
                loading="lazy"
                fetchPriority="auto"
                decoding="async"
              />
            </a>
            <a
              href="https://x.com/eSimFacil"
              aria-label="X"
              id="footer-social-x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={X}
                alt="X"
                width={32}
                height={32}
                loading="lazy"
                fetchPriority="auto"
                decoding="async"
              />
            </a>
            <a
              href={`mailto:${EMAIL_URL}`}
              aria-label="Email"
              title="Enviar e-mail para SAC"
              id="footer-social-email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={email}
                alt="Email"
                width={32}
                height={32}
                className="transition-opacity hover:opacity-80"
                loading="lazy"
                fetchPriority="auto"
                decoding="async"
              />
            </a>
          </div>

          <div className="border-b border-[#FFFFFF] w-full mb-6"></div>

          <div className="flex flex-col items-center w-full gap-6 lg:flex-row lg:justify-between lg:gap-0">
            <div className="relative text-center lg:text-left">
              <p className="pb-1 text-sm">Idioma</p>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-black text-white px-4 py-2 pr-8 rounded border border-white focus:outline-none focus:border-[#FF2626] cursor-pointer text-sm"
              >
                <option value="pt-BR">Português (BR)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pt-5 text-white pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            <div className="text-xs text-center lg:text-right sm:text-sm">
              <p className="pb-1">
                CNPJ: 52.745.456/0001-84 / Copyright © 2025 - eSimFacil OnLine de Seviços - Todos
                os direitos reservados.
              </p>
              <p>© 2025, eSIM Fácil - Desenvolvido por eSimFácil</p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full pt-8 mt-6">
            <Image
              src={sites}
              alt="Sites Seguros e Formas de Pagamento"
              width={280}
              height={65}
              className="object-contain"
              loading="lazy"
              fetchPriority="auto"
              decoding="async"
            />
          </div>
        </div>
      </footer>
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.5)' }}
        >
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg animate-slide-down">
            <h3 className="text-lg font-bold mb-4 text-[#E60000]">Política de Privacidade</h3>
            <div className="text-gray-800 text-sm max-h-[60vh] overflow-y-auto">
              <p>
                Sua privacidade é muito importante para nós. Todas as informações fornecidas em
                nosso site são tratadas com total confidencialidade e segurança. Não compartilhamos
                seus dados com terceiros sem seu consentimento. Para mais detalhes, entre em contato
                com nosso suporte.
              </p>
              <p className="mt-4">
                Caso queira saber mais sobre como tratamos seus dados, entre em contato pelo e-mail{' '}
                <a href="mailto:suporte@esimfacil.com" className="underline text-[#E60000]">
                  suporte@esimfacil.com
                </a>
                .
              </p>
            </div>
            <button
              className="mt-6 w-full bg-[#E60000] text-white py-2 rounded hover:bg-[#b30000] font-semibold cursor-pointer"
              onClick={() => setShowPrivacyModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
