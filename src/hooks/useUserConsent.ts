import { useEffect, useState } from 'react';
import { isProduction } from '@/utils/env.utils';

export default function useUserConsent() {
  const [hasConsent, setHasConsent] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent') === 'true';
    setHasConsent(consent && isProduction);
  }, []);

  return hasConsent;
}
