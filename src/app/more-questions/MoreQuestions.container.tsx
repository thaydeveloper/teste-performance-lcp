'use client';

import { FC, useState } from 'react';
import MoreQuestions from './MoreQuestions';
import { moreQuestionsData } from './MoreQuestions.constants';

const MoreQuestionsContainer: FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <main>
      <MoreQuestions data={moreQuestionsData} handleToggle={handleToggle} expandedId={expandedId} />
    </main>
  );
};

export default MoreQuestionsContainer;
