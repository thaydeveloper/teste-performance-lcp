'use client';
import { FC, useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Statements from './Statements';
import { StatementCard } from './sub-components';
import { Statement } from './Statement.interface';
import { statementsData } from '@/constants/statements.constants';

const StatementsContainer: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null!);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleCarouselChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobileView(window.innerWidth < 768);
      }
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    setCurrentSlide(isMobileView ? 0 : 1);
  }, [isMobileView]);

  const renderStatement = useCallback(
    (statement: Statement, index: number) => {
      const isCenterSlide = index === currentSlide;
      return (
        <div
          className={`transition-transform duration-300 ${isCenterSlide ? 'scale-100 md:scale-110' : 'scale-95 md:scale-90 opacity-70'}`}
        >
          <StatementCard
            {...statement}
            isOpen={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        </div>
      );
    },
    [currentSlide, expandedIndex, handleToggle],
  );

  const { slidePercentage, itemContainerClassNameCalculated } = useMemo(() => {
    return {
      slidePercentage: isMobileView ? 100 : 33.33,
      itemContainerClassNameCalculated: isMobileView
        ? 'py-8 w-full max-w-[300px] mx-auto h-auto'
        : 'py-10 min-w-[400px] h-[466px]',
    };
  }, [isMobileView]);

  return (
    <Statements
      statements={statementsData}
      expandedIndex={expandedIndex}
      currentSlide={currentSlide}
      isMobileView={isMobileView}
      carouselRef={carouselRef}
      handleCarouselChange={handleCarouselChange}
      renderStatement={renderStatement}
      slidePercentage={slidePercentage}
      itemContainerClassNameCalculated={itemContainerClassNameCalculated}
    />
  );
};

export default StatementsContainer;
