import { FC } from 'react';
import FAQ from './FAQ';
import { FAQ_QUESTIONS } from '@/constants/faq.constants';

const FAQ_TITLE = 'Se estiver com alguma dúvida, veja nossas';
const FAQ_SUBTITLE = 'Confira respostas rápidas para suas principais dúvidas.';
const FAQ_BUTTON_TEXT = 'Mais perguntas!';
const FAQ_BUTTON_LINK = '/more-questions';

const faqData = {
  id: FAQ_QUESTIONS[0].id,
  title: FAQ_TITLE,
  subtitle: FAQ_SUBTITLE,
  questions: FAQ_QUESTIONS,
  buttonText: FAQ_BUTTON_TEXT,
  buttonLink: FAQ_BUTTON_LINK,
};

const FAQContainer: FC = () => {
  return <FAQ data={faqData} />;
};

export default FAQContainer;
