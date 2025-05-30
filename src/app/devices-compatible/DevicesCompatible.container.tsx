'use client';

import { FC, useState } from 'react';
import DevicesCompatible from './DevicesCompatible';
import { DevicesCompatibleData } from './DevicesCompatible.constants';

const DevicesCompatibleContainer: FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <main>
      <DevicesCompatible
        brands={DevicesCompatibleData.brands}
        title={DevicesCompatibleData.title}
        subtitle={DevicesCompatibleData.subtitle}
        onToggle={handleToggle}
      />
    </main>
  );
};

export default DevicesCompatibleContainer;
