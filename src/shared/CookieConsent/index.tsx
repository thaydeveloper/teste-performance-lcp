'use client';

import { useEffect, useState } from 'react';
import ClarityScript from '@/analytics/Clarity.script';
import GTagScript from '@/analytics/GTag.script';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setConsent(consent === 'true');
    if (!consent) {
      // Adiciona um delay de 2 segundos antes de mostrar o banner
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setConsent(true);
    setShowBanner(false);
  };

  if (consent) {
    // Renderiza scripts de terceiros só após consentimento
    return (
      <>
        <ClarityScript />
        <GTagScript />
      </>
    );
  }

  if (!showBanner) return null;

  return (
    <div className="max-w-[600px] mx-auto fixed bottom-0 left-0 right-0 z-50 px-4 py-4 bg-white border-t-4 border-[#E60000] shadow-2xl text-[#262626] text-center flex flex-col items-center gap-2">
      <p className="mb-2 text-sm text-base font-medium sm:text-base">
        Usamos cookies para melhorar sua experiência. Ao aceitar, você permite que rastreamos dados
        de uso.
      </p>
      <div className="flex justify-center">
        <button
          onClick={handleAccept}
          className="bg-[#E60000] text-white font-bold px-6 py-2 rounded-lg shadow transition hover:bg-[#b30000] focus:outline-none focus:ring-2 focus:ring-[#E60000] focus:ring-offset-2"
        >
          Aceitar cookies
        </button>
      </div>
    </div>
  );
}
