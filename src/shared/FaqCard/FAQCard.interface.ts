import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface FAQQuestion {
  id: string;
  question: string;
  answer: string;
  circle?: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  questions: FAQQuestion[];
  buttonText: string;
  buttonLink: string;
}

export interface FAQProps {
  data: FAQData;
}

export interface FAQCardProps {
  item: {
    question: string;
    answer: string;
    circle?: string;
    subQuestions?: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
  };
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  icon?: string | StaticImport;
  showSubQuestions?: boolean;
  showSidebar?: boolean;
  showLines?: boolean;
  showShadow?: boolean;
}
