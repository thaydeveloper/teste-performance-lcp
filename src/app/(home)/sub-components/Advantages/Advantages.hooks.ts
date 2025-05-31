'use client';
import { useState, useCallback, useRef, useEffect } from 'react'; //
import { AdvantagesCardProps } from './Advantages.interface';

export interface UseAdvantagesCarouselProps {
  advantages: AdvantagesCardProps[];
}

export const useAdvantagesCarousel = ({ advantages }: UseAdvantagesCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const isTransitioning = useRef(false);

  const handleCarouselChange = useCallback((index: number) => {
    setCurrentSlide(index);

    setTimeout(() => {
      isTransitioning.current = false;
    }, 400);
  }, []);

  const nextSlide = useCallback(() => {
    if (!isTransitioning.current && carouselRef.current) {
      isTransitioning.current = true;
      const newSlide = (currentSlide + 1) % advantages.length;

      setCurrentSlide(newSlide);
    }
  }, [currentSlide, advantages.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning.current && carouselRef.current) {
      isTransitioning.current = true;
      const newSlide = (currentSlide - 1 + advantages.length) % advantages.length;

      setCurrentSlide(newSlide);
    }
  }, [currentSlide, advantages.length]);

  useEffect(() => {
    return () => {
      isTransitioning.current = false;
    };
  }, []);

  return {
    currentSlide,
    setCurrentSlide,
    carouselRef,
    handleCarouselChange,
    nextSlide,
    prevSlide,
  };
};
