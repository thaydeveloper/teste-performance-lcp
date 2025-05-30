'use client';
import { FC } from 'react';
import { images } from '@shared/assets';
import { Footer } from '@/shared';
import { RefundPolicyProps } from './RefundPolicy.interface';
import { RefundPolicyCard } from './sub-components';

const RefundPolicy: FC<RefundPolicyProps> = ({ data }) => (
  <section className="transition-all ease-out bg-white">
    <div className="relative">
      {/* Seção de imagem de fundo com overlay */}
      <section
        className="relative min-h-[650px] flex flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images.refundBackground})`,
        }}
      >
        {/* Overlay preto translúcido */}
        <div className="absolute inset-0 z-0 bg-black/70" />
        {/* Título e subtítulo centralizados */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4 pt-40 mx-auto text-center transition-all ease-out">
          <h2 className="text-[2.2rem] md:text-[2.7rem] font-bold text-white drop-shadow-lg leading-tight w-full">
            {data.title}
          </h2>
          <p className="w-full pb-16 mt-4 text-lg text-white drop-shadow">
            Na eSimFacil, levamos a sério a satisfação de nossos clientes. Devido à natureza do
            nosso produto, que é digital e personalizado, nossa política de reembolso reflete a
            necessidade de proteger os interesses tanto da empresa quanto dos consumidores. Abaixo,
            detalhamos as regras aplicáveis aos reembolsos e cancelamentos dos nossos serviços.
          </p>
        </div>
      </section>

      {/* Lista de perguntas */}
      <div className="relative px-4 -mt-10">
        <div className="container mx-auto max-w-[800px] ">
          <div className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-1">
            {data.questions.map((item, index) => (
              <RefundPolicyCard key={index + item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
);

export default RefundPolicy;
