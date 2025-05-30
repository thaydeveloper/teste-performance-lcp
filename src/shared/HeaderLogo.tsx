import Image from 'next/image';
import React from 'react';
import { images } from './assets';

export function HeaderLogo() {
  return (
    <div id="header-logo">
      <Image
        src={images.mainLogo2}
        alt="eSIM Logo"
        width={146}
        height={34}
        fetchPriority="auto"
        decoding="async"
        style={{ display: 'block' }}
      />
    </div>
  );
}
