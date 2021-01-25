import { questionAdapter } from '../adapters/questions';

// Stubbed API endpoints so as to not flood the real API while developing.
export const getQuestions = async () => {
  const response = {
    response_code: 0,
    results: [
      {
        category: 'General Knowledge',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'Science: Computers',
        type: 'boolean',
        difficulty: 'hard',
        question: 'DHCP stands for Dynamic Host Configuration Port.',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'Entertainment: Music',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'The song &quot;Mystery Train&quot; was released by artist &quot;Little Junior&#039;s Blue Flames&quot; in 1953.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
    ],
  };

  return response.results.map(questionAdapter);
};
