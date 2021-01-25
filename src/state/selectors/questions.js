import { createSelector } from 'reselect';

const questionSelector = state => state.questions;

export const answeredQuestionsSelector = createSelector(
  questionSelector,
  questions => questions.answered,
);

export const currentQuestionSelector = createSelector(
  questionSelector,
  questions => questions.current,
);

export const remainingQuestionsSelector = createSelector(
  questionSelector,
  questions => questions.remaining,
);

export const currentQuestionIndexSelector = createSelector(
  answeredQuestionsSelector,
  answered => answered.length + 1,
);

export const allQuestionsSelector = createSelector(
  answeredQuestionsSelector,
  currentQuestionSelector,
  remainingQuestionsSelector,
  (answered, current, remaining) => [
    ...answered,
    ...(current !== null ? [current] : []),
    ...remaining,
  ],
);

export const rightAnsweredQuestionsSelector = createSelector(
  answeredQuestionsSelector,
  answered =>
    answered.filter(
      answeredQuestion =>
        answeredQuestion.correctAnswer === answeredQuestion.answer,
    ),
);

/**
 * Tells weather a game has finished.
 * A game is considered finished if
 * numberOfRemainingQuestions === 0 and numberOfAnsweredQuestions > 0
 * @param {Object} state - Application state
 * @returns {Boolean}
 */
export const gameFinishedSelector = createSelector(
  remainingQuestionsSelector,
  answeredQuestionsSelector,
  (remaining, answered) => remaining.length === 0 && answered.length > 0,
);
