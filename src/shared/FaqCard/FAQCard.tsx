'use client';

import { FC } from 'react';

import Image from 'next/image';
import { FAQCardProps } from './FAQCard.interface';

const FAQCard: FC<FAQCardProps> = ({
  item,
  isExpanded,
  onToggle,
  index,
  icon,
  showSubQuestions = false,
  showSidebar = false,
  showLines = false,
  showShadow = false,
}) => {
  const contentPaddingClasses = showSidebar ? 'px-6 sm:px-10 pt-0 pb-0' : 'px-4 pt-5 pb-5';

  const minHeightClasses = showSidebar ? 'min-h-[65px] sm:pt-4 pt-3' : 'min-h-[60px]';

  return (
    <div
      className={`bg-white rounded-lg relative w-full  transition-all duration-300 flex overflow-hidden ${minHeightClasses} ${
        showShadow && showSidebar ? 'shadow-lg sm:shadow-none ' : ''
      }${showShadow ? 'shadow-lg' : ''}`}
      id={`faq-card-${index}`}
      style={{
        height: 'auto',
        maxWidth: '100%',
      }}
    >
      {showLines && (
        <div className="flex-shrink-0 flex items-center py-3 sm:py-4 pl-3 sm:pl-4">
          <div
            className="bg-[#FF0000] transition-all duration-300"
            style={{
              width: '3px',
              height: isExpanded ? '100%' : '28px',
            }}
          />
        </div>
      )}
      <div className={`flex-grow ${contentPaddingClasses}`}>
        <div
          className="flex items-start justify-between cursor-pointer"
          onClick={onToggle}
          id={`faq-question-toggle-${index}`}
        >
          <div className="flex items-start flex-1">
            <h3 className="text-[var(--color-black)] font-semibold text-sm sm:text-base lg:text-[20px] pr-2 sm:pr-4 font-roboto">
              <div className="flex items-start">
                <span className="mr-1 sm:mr-2 flex-shrink-0">{index + 1}.</span>
                <span className="line-clamp-2 sm:line-clamp-none">{item.question}</span>
              </div>
            </h3>
          </div>
          <div className="flex-shrink-0">
            {icon && (
              <Image
                src={icon}
                alt="Expandir"
                width={24}
                height={24}
                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
              />
            )}
          </div>
        </div>

        <>
          {isExpanded && (
            <div className="overflow-hidden" id={`faq-answer-${index}`}>
              <div className="pt-3 pb-1 sm:pt-4 sm:pb-2">
                <p className="text-[var(--color-black)] text-sm lg:text-[16px] font-roboto break-words">
                  {item.answer}
                </p>

                {showSubQuestions && item.subQuestions && item.subQuestions.length > 0 && (
                  <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-4">
                    {item.subQuestions.map((subQ) => (
                      <div key={subQ.id} className="pb-2 sm:pb-3">
                        <h5 className="text-[text-[var(--color-black)]] font-medium text-sm sm:text-base lg:text-[18px] mb-1 font-roboto">
                          {subQ.question}
                        </h5>
                        <p className="text-[text-[var(--color-black)]] text-sm lg:text-[16px] pl-2 sm:pl-4 font-roboto break-words">
                          {subQ.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </>

        {showSidebar && <div className="border-t border-gray-200 mt-2 py-1 sm:mt-2 sm:py-2" />}
      </div>
    </div>
  );
};

export default FAQCard;
