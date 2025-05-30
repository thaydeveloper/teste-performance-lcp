import Image from 'next/image';
import { icons } from '../assets';
export const renderMobileArrows = (
  current: number,
  total: number,
  prevHandler: () => void,
  nextHandler: () => void,
) => (
  <div className="flex justify-center gap-10 mt-6">
    <button
      onClick={prevHandler}
      aria-label="Slide anterior"
      className="rounded-full w-18 h-18 flex items-center justify-center"
      disabled={current === 0}
      tabIndex={0}
    >
      <Image src={icons.buttonNext} alt="" width={38} height={38} className="rotate-180" />
    </button>
    <button
      onClick={nextHandler}
      aria-label="Próximo slide"
      className="rounded-full w-18 h-18 flex items-center justify-center"
      disabled={current === total - 1}
      tabIndex={0}
    >
      <Image src={icons.buttonNext} alt="" width={38} height={38} />
    </button>
  </div>
);
