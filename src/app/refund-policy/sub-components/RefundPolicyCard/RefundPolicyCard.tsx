import { FC } from 'react';
import { RefundPolicyCardProps } from '../../RefundPolicy.interface';

// Função para renderizar links markdown
const renderMarkdownLinks = (text: string) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-[#d32f2f] hover:text-[#a30000]"
      >
        {match[1]}
      </a>,
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
};

// Função para renderizar texto com negrito e links markdown
const renderTextWithBoldAndLinks = (text: string) => {
  // Primeiro, divide por negrito
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  return boldParts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove os ** e renderiza em negrito, processando links dentro
      return (
        <strong key={i} className="font-bold">
          {renderMarkdownLinks(part.slice(2, -2))}
        </strong>
      );
    }
    // Renderiza links markdown dentro do texto normal
    return <span key={i}>{renderMarkdownLinks(part)}</span>;
  });
};

const RefundPolicyCard: FC<RefundPolicyCardProps> = ({ item, index }: RefundPolicyCardProps) => {
  const answerLines = item.answer.split('\n');

  return (
    <div className="relative bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex overflow-hidden">
      {/* Faixa vermelha à esquerda */}
      <div className="w-4 bg-[#d32f2f] rounded-l-2xl" />
      {/* Conteúdo principal */}
      <div className="flex-1 p-6">
        {/* Título */}
        <h3 className="flex items-center mb-2 text-2xl font-bold text-black">
          {index + 1}. {item.question}
        </h3>
        {/* Linha vermelha */}
        <div className="h-[2px] bg-[#d32f2f] w-full mb-4" />
        {/* Conteúdo do card */}
        <div>
          {answerLines.map((line, idx) => {
            // Se for uma linha de lista
            if (line.startsWith('-')) {
              return (
                <p key={idx} className="pl-4 mt-2 text-base text-black">
                  • {renderTextWithBoldAndLinks(line.slice(1).trim())}
                </p>
              );
            }
            // Texto normal
            return (
              <p key={idx} className="mt-2 text-base text-black">
                {renderTextWithBoldAndLinks(line.trim())}
              </p>
            );
          })}
          {/* Texto em destaque vermelho, com link se houver */}
          {item.highlightText &&
            (item.highlightLink ? (
              <a
                href={item.highlightLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-[#d32f2f] font-semibold text-right text-base hover:underline"
              >
                {item.highlightText} <span aria-hidden>→</span>
              </a>
            ) : (
              <p className="block mt-6 text-[#d32f2f] font-semibold text-right text-base">
                {item.highlightText}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyCard;
