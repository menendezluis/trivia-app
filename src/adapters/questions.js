let id = 0;

const answerMapper = {
  True: true,
  False: false,
};

/**
 * Takes a question object as received from the API and
 * returns a new question object with the format the application expects
 * @param {Object} apiQuestion - A question object as received from the API.
 * @returns {Object}
 */
export const questionAdapter = apiQuestion => ({
  id: id++,
  category: apiQuestion.category,
  questionText: apiQuestion.question,
  correctAnswer: answerMapper[apiQuestion.correct_answer],
});
