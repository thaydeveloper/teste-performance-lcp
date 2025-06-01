'use client';

import { FC, useState } from 'react';

import { FAQCard } from '@/shared/FaqCard';
import openCard from '@public/assets/icons/open-card.webp';
import { FAQProps } from '@/shared/FaqCard/FAQCard.interface';

const FAQ: FC<FAQProps> = ({ data }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container   mx-auto px-2 sm:px-4 md:px-10 md:min-h-[540px] max-w-[1280px] z-100 rounded-[10px] bg-white shadow-lg overflow-hidden">
      {/* Título */}
      <div className="text-center py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 justify-center">
          <h2 className="text-lg sm:text-xl md:text-[32px] font-bold text-[var(--color-primary-light)] whitespace-nowrap">
            Guia Completo
          </h2>
          <h2 className="text-lg sm:text-xl md:text-[32px] text-[var(--color-black)] font-bold text-center sm:text-left">
            sobre eSIM - Compre Agora!
          </h2>
        </div>
      </div>

      {/* Perguntas */}
      <div className="px-2 pb-4 sm:px-4 sm:pb-8">
        <div className="flex flex-col items-stretch gap-2 sm:gap-3 md:gap-4 w-full">
          {data.questions.map((item, index) => (
            <FAQCard
              key={`faq-${index}`}
              index={index}
              item={item}
              isExpanded={expandedId === index}
              onToggle={() => handleToggle(index)}
              showSidebar={true}
              showShadow={true}
              icon={openCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
