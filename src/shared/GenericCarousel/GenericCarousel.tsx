import { useCallback, memo } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { icons } from '@shared/assets';
import { GenericCarouselProps } from './Carousel.interface';
import { renderMobileArrows } from './RendermobileArrows';

const GenericCarousel = <T extends object>({
  items,
  renderItem,
  currentSlide,
  carouselRef,
  onChangeSlide,
  onPrevSlide,
  onNextSlide,
  centerMode = true,
  centerSlidePercentage = 85,
  showArrows = false,
  showStatus = false,
  showIndicators = true,
  showThumbs = false,
  swipeable = true,
  emulateTouch = true,
  preventMovementUntilSwipeScrollTolerance = true,
  swipeScrollTolerance = 30,
  useKeyboardArrows = true,
  stopOnHover = true,
  interval = undefined,
  transitionTime = 350,
  statusFormatter = (current, total) => `Slide ${current} de ${total}`,
  itemContainerClassName = '',
  ariaLabel = 'Carrossel de itens',
  nextButtonId = 'carousel-next-button',
  prevButtonId = 'carousel-prev-button',
  wrapperClassName = 'relative block md:hidden carousel-container',
  isMobile = false,
}: GenericCarouselProps<T>) => {
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && onPrevSlide) {
        onPrevSlide();
      } else if (e.key === 'ArrowRight' && onNextSlide) {
        onNextSlide();
      }
    },
    [onPrevSlide, onNextSlide],
  );

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={wrapperClassName}
      onKeyDown={handleKeyPress}
      role="region"
      aria-label={ariaLabel}
    >
      <Carousel
        ref={carouselRef}
        className="mb-8"
        showArrows={!isMobile && showArrows}
        showStatus={showStatus}
        showIndicators={showIndicators}
        showThumbs={showThumbs}
        selectedItem={currentSlide}
        onChange={onChangeSlide}
        centerMode={centerMode}
        centerSlidePercentage={centerSlidePercentage}
        swipeable={swipeable}
        emulateTouch={emulateTouch}
        preventMovementUntilSwipeScrollTolerance={preventMovementUntilSwipeScrollTolerance}
        swipeScrollTolerance={swipeScrollTolerance}
        useKeyboardArrows={useKeyboardArrows}
        stopOnHover={stopOnHover}
        interval={interval}
        transitionTime={transitionTime}
        statusFormatter={statusFormatter}
        renderArrowPrev={
          !isMobile && showArrows
            ? (clickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    onClick={clickHandler}
                    title={label}
                    className="absolute -left-0 z-10 transition-colors duration-200 -translate-y-1/2 rounded-full top-1/2 w-[74px] h-[74px]"
                    aria-label="Slide anterior"
                    id={prevButtonId}
                  >
                    <Image
                      src={icons.buttonNext}
                      alt=""
                      width={30}
                      height={30}
                      className="rotate-180"
                      priority
                    />
                  </button>
                )
            : undefined
        }
        renderArrowNext={
          !isMobile && showArrows
            ? (clickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    onClick={clickHandler}
                    title={label}
                    className="absolute -right-0 z-10 transition-colors duration-200 -translate-y-1/2 rounded-full top-1/2 w-[74px] h-[74px]"
                    aria-label="Próximo slide"
                    id={nextButtonId}
                  >
                    <Image src={icons.buttonNext} alt="" width={30} height={30} priority />
                  </button>
                )
            : undefined
        }
      >
        {items.map((item, index) => (
          <div key={index} className={itemContainerClassName}>
            <div className="flex justify-center items-center w-full h-full">
              {renderItem(item, index, index === currentSlide, carouselRef)}
            </div>
          </div>
        ))}
      </Carousel>
      {isMobile &&
        renderMobileArrows(
          currentSlide,
          items.length,
          () => onChangeSlide(Math.max(currentSlide - 1, 0)),
          () => onChangeSlide(Math.min(currentSlide + 1, items.length - 1)),
        )}
    </div>
  );
};

const MemoizedGenericCarousel = memo(GenericCarousel) as typeof GenericCarousel;
(MemoizedGenericCarousel as React.FC<GenericCarouselProps<unknown>>).displayName =
  'GenericCarousel';

export default MemoizedGenericCarousel;
