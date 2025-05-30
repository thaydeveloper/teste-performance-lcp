import { FC } from 'react';
import Image from 'next/image';
import { icons } from '@shared/assets';
import { StatementCardProps } from '../Statement.interface';

const StatementCard: FC<StatementCardProps> = ({
  image,
  date,
  name,
  locale,
  title,
  description,
}) => {
  return (
    <div
      className={`
        bg-white text-[#262626] shadow-md rounded-[20px] relative
        transform transition-all duration-300 ease-in-out overflow-hidden
        w-full max-w-[450px] min-h-[320px] p-4
        md:p-5
        ${'md:w-[400px] md:h-[350px] md:scale-90 z-0'}
        flex flex-col
      `}
    >
      {/* Cabeçalho com imagem e nome */}
      <div className="flex items-center mb-3 flex-shrink-0">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="object-cover w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="ml-3 min-w-0 flex-1">
          <h3 className="text-base font-semibold md:text-lg md:font-medium truncate">{name}</h3>
        </div>
      </div>

      {/* Estrelas e data - Container ajustado */}
      <div className="mb-2 flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2 ">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={icons.star}
              alt="Estrela"
              width={20}
              height={20}
              className="w-4 h-4 md:w-4 md:h-4"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <span className="text-[#262626]/70 text-xs md:text-sm truncate ml-1">{date}</span>
      </div>

      <span className="text-[#262626]/70 mb-3 text-xs md:text-sm text-left truncate flex-shrink-0">
        {locale}
      </span>

      {/* Container do conteúdo - Área flexível */}
      <div className="flex flex-col flex-grow min-h-0">
        <h4 className="font-bold text-sm md:text-[18px] text-left mb-2 md:mb-3 line-clamp-2">
          {title}
        </h4>
        <div className="flex-grow overflow-hidden pr-1">
          <p className="text-left leading-normal text-[#262626] text-xs md:text-[16px] h-full overflow-y-auto custom-scrollbar">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatementCard;
