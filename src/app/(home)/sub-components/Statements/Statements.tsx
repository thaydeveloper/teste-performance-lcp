'use client';
import { FC } from 'react';
import Image from 'next/image';
import { StatementsProps } from './Statement.interface';

import { GenericCarousel } from '@/shared/GenericCarousel';
import { images } from '@shared/assets';

const Statements: FC<StatementsProps> = ({
  statements,
  currentSlide,
  carouselRef,
  handleCarouselChange,
  isMobileView,
  renderStatement,
  slidePercentage,
  itemContainerClassNameCalculated,
}) => {
  return (
    <div className="relative w-full py-10 overflow-visible bg-gradient-to-r from-[#E60000] via-[#C20000] to-[#800000]">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.rectangleBackground}
          alt="Padrão de fundo"
          className="object-cover h-full opacity-100"
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Image
          src={images.rectangleBackground2}
          alt="Padrão de fundo"
          className="object-cover h-full opacity-100"
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="relative z-10">
        <div className="flex justify-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[28px] text-white font-bold text-center">
            Veja o que nossos clientes estão dizendo!
          </h2>
        </div>

        <div className="w-full z-10 relative">
          <GenericCarousel
            items={statements}
            renderItem={renderStatement}
            currentSlide={currentSlide}
            carouselRef={carouselRef}
            onChangeSlide={handleCarouselChange}
            centerMode={true}
            centerSlidePercentage={slidePercentage}
            showStatus={false}
            emulateTouch={isMobileView}
            swipeable={isMobileView}
            itemContainerClassName={itemContainerClassNameCalculated}
            ariaLabel="Carrossel de depoimentos"
            showArrows={true}
            showIndicators={false}
            wrapperClassName="relative block"
            isMobile={isMobileView}
          />
        </div>
      </div>
    </div>
  );
};

export default Statements;
