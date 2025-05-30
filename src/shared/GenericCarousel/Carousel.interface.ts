import { ReactNode } from 'react';
import { Carousel } from 'react-responsive-carousel';

export interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (
    item: T,
    index: number,
    isSelected: boolean,
    carouselRef?: React.RefObject<Carousel>,
  ) => ReactNode;
  currentSlide: number;
  carouselRef?: React.RefObject<Carousel>;
  onChangeSlide: (index: number) => void;
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
  centerMode?: boolean;
  centerSlidePercentage?: number;
  showArrows?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
  swipeable?: boolean;
  emulateTouch?: boolean;
  preventMovementUntilSwipeScrollTolerance?: boolean;
  swipeScrollTolerance?: number;
  useKeyboardArrows?: boolean;
  stopOnHover?: boolean;
  interval?: number | undefined;
  transitionTime?: number;
  statusFormatter?: (current: number, total: number) => string;
  itemContainerClassName?: string;
  ariaLabel?: string;
  nextButtonId?: string;
  prevButtonId?: string;
  wrapperClassName?: string;
  isMobile?: boolean;
}
