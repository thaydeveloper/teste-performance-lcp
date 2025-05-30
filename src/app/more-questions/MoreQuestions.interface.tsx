export interface SubQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface MoreQuestion {
  question: string;
  answer: string;

  subQuestions?: SubQuestion[];
}

export interface MoreQuestionsData {
  title: string;
  subtitle: string;
  questions: MoreQuestion[];
}

export interface MoreQuestionProps {
  data: MoreQuestionsData;
  handleToggle: (id: number) => void;
  expandedId: number | null;
}
