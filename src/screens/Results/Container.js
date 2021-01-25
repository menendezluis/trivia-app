import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  answeredQuestionsSelector,
  rightAnsweredQuestionsSelector,
  gameFinishedSelector,
} from '../../state/selectors/questions';
import { Layout } from './Layout';

const Container = ({
  isGameFinished,
  answers,
  totalAnswersCount,
  rightAnswersCount,
}) => {
  return isGameFinished ? (
    <Layout
      answers={answers}
      totalAnswersCount={totalAnswersCount}
      rightAnswersCount={rightAnswersCount}
    />
  ) : (
    <Redirect to="/" />
  );
};

Container.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      questionText: PropTypes.string.isRequired,
      answer: PropTypes.bool.isRequired,
      correctAnswer: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  totalAnswersCount: PropTypes.number.isRequired,
  rightAnswersCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  answers: answeredQuestionsSelector(state),
  totalAnswersCount: answeredQuestionsSelector(state).length,
  rightAnswersCount: rightAnsweredQuestionsSelector(state).length,
  isGameFinished: gameFinishedSelector(state),
});

const enhance = connect(mapStateToProps);

const withData = enhance(Container);

export { withData as Container };
