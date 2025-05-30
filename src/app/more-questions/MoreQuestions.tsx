import { FC } from 'react';

import { Footer } from '@/shared';
import { images, icons } from '@shared/assets';

import { MoreQuestionProps } from './MoreQuestions.interface';
import SendQuestion from './sub-components/SendQuestions/SendQuestion';
import { FAQCard } from '@/shared/FaqCard';

const MoreQuestions: FC<MoreQuestionProps> = ({ data, handleToggle, expandedId }) => (
  <section className="bg-white transition-all ease-out">
    <div className="pb-20 ">
      {/* Seção de imagem de fundo */}
      <section
        className="relative min-h-[400px] sm:min-h-[690px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-12 sm:pt-16 pb-24 sm:pb-42 md:pb-40"
        style={{
          backgroundImage: `url(${images.backgroundFaq})`,
        }}
      >
        <div className="container mx-auto px-4 w-full  max-w-4xl text-center transition-all ease-out">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] font-bold">
            {data.title}
          </h2>
          <p className="text-[#FFFFFF] text-center text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed max-w-full mx-auto">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Container para as perguntas */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-28 md:-mt-36 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-2">
            {data.questions.map((item, index) => (
              <FAQCard
                key={index + item.question}
                index={index}
                item={item}
                isExpanded={expandedId === index}
                onToggle={() => handleToggle(index)}
                icon={icons.openCard}
                showSubQuestions={true}
                showSidebar={false}
                showLines={true}
                showShadow={true}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20">
        <SendQuestion />
      </div>
    </div>
    <Footer />
  </section>
);

export default MoreQuestions;
