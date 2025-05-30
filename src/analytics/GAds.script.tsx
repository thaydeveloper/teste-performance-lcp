'use client';
// TODO: Verificar o que esse script faz acredito que seja relacionado ao google ads
import Script from 'next/script';
import { useUserConsent } from '@/hooks';

const GAdsScript = () => {
  // const hasConsent = useUserConsent();
  // if (!hasConsent) return null;

  return (
    <Script
      id="google-tag-manager-script"
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=G-SLZ0EZFRBT"
    />
  );
};

export default GAdsScript;
