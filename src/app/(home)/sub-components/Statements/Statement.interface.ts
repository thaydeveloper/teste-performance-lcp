import { Carousel } from 'react-responsive-carousel';
import { JSX, RefObject } from 'react';

export interface Statement {
  image: string;
  date: string;
  name: string;
  locale: string;
  title: string;
  description: string;
}

export interface StatementCardProps extends Statement {
  isOpen: boolean;
  onToggle: () => void;
}

export interface StatementsProps {
  statements: Statement[];
  expandedIndex: number | null;
  currentSlide: number;
  isMobileView: boolean;
  carouselRef: RefObject<Carousel>;
  handleCarouselChange: (index: number) => void;
  renderStatement: (statement: Statement, index: number) => JSX.Element;
  slidePercentage: number;
  itemContainerClassNameCalculated: string;
}
