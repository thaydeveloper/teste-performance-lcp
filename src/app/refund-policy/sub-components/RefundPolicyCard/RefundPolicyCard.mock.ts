import { RefundPolicyCardMocks } from '../../RefundPolicy.interface';

export const refundPolicyCardMocks: RefundPolicyCardMocks = {
  padrao: {
    item: {
      question: 'Como funciona o reembolso?',
      answer:
        'O reembolso é realizado em até **7 dias úteis** após a solicitação.\n- O valor será devolvido via [Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix).\n- Em caso de dúvidas, entre em contato com o suporte.',
      highlightText: 'Saiba mais sobre reembolsos',
      highlightLink: 'https://www.exemplo.com/reembolso',
    },
    index: 0,
  },
  semLinkDeDestaque: {
    item: {
      question: 'Quando não há link de destaque?',
      answer: 'O reembolso pode não estar disponível em alguns casos.',
      highlightText: 'Consulte as condições',
    },
    index: 1,
  },
};
