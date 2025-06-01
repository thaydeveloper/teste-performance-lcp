'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
  loading: () => <div className="h-[300px] bg-gray-50 animate-pulse" />,
});

export default function FooterContainer() {
  return (
    <Suspense fallback={<div className="h-[300px] bg-gray-50 animate-pulse" />}>
      <Footer />
    </Suspense>
  );
}
