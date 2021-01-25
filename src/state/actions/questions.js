import { stringArrayToObject } from '../../lib';
import { getQuestions } from '../../api';

export const actions = stringArrayToObject([
  'FETCH_QUESTIONS_SUCCESS',
  'ANSWER_FALSE',
  'ANSWER_TRUE',
  'FETCH_QUESTIONS_FAILURE',
]);

export const fetchQuestions = () => {
  return async dispatch => {
    try {
      const questions = await getQuestions();

      dispatch(fetchQuestionsSuccess(questions));
    } catch (error) {
      fetchQuestionsFailure(error);
    }
  };
};

export const fetchQuestionsSuccess = questions => ({
  type: actions.FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

const fetchQuestionsFailure = error => ({
  type: actions.FETCH_QUESTIONS_FAILURE,
  payload: error,
});

export const answerFalse = () => ({
  type: actions.ANSWER_FALSE,
});

export const answerTrue = () => ({
  type: actions.ANSWER_FALSE,
});
