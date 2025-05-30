export interface RefundPolicyQuestion {
  question: string;
  answer: string;
  highlightText?: string;
  highlightLink?: string;
}

export interface RefundPolicyData {
  title: string;
  subtitle: string;
  questions: RefundPolicyQuestion[];
}

export interface RefundPolicyProps {
  data: RefundPolicyData;
}

export interface RefundPolicyCardProps {
  item: RefundPolicyQuestion;
  index: number;
}

export type RefundPolicyCardMock = RefundPolicyCardProps;

export interface RefundPolicyCardMocks {
  padrao: RefundPolicyCardMock;
  semLinkDeDestaque: RefundPolicyCardMock;
}
