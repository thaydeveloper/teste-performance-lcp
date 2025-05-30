import { FC } from 'react';
import { AdvantagesCardProps } from '../Advantages.interface';

const AdvantagesCard: FC<AdvantagesCardProps> = ({ title, description, style }) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center 
        bg-gradient-to-b from-[var(--color-primary-dark)] to-[#800000]
        rounded-2xl
        shadow-lg
        text-center
        w-[290px] h-[158px]
        md:w-[411px] md:h-[280px]
        p-4 md:p-8
        overflow-hidden
        transition-all
      `}
      style={style}
    >
      <h3 className="text-white text-base md:text-2xl font-bold mb-2 md:mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-white text-xs md:text-base leading-snug md:leading-normal">
        {description}
      </p>
    </div>
  );
};

export default AdvantagesCard;
