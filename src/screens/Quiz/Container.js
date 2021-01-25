import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  currentQuestionSelector,
  allQuestionsSelector,
  currentQuestionIndexSelector,
  remainingQuestionsSelector,
} from '../../state/selectors/questions';
import { Spinner } from '../../components/Spinner';
import {
  fetchQuestions,
  answerTrue,
  answerFalse,
} from '../../state/actions/questions';
import { Layout } from './Layout';

class Container extends Component {
  static propTypes = {
    currentQuestionIndex: PropTypes.number.isRequired,
    questionCount: PropTypes.number.isRequired,
    areAllAnswered: PropTypes.bool.isRequired,
    answerTrue: PropTypes.func.isRequired,
    answerFalse: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    question: PropTypes.shape({
      questionText: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    question: null,
  };

  componentWillMount = this.props.fetchQuestions;

  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <Layout
        question={this.props.question}
        currentQuestionIndex={this.props.currentQuestionIndex}
        questionCount={this.props.questionCount}
        areAllAnswered={this.props.areAllAnswered}
        answerTrue={this.props.answerTrue}
        answerFalse={this.props.answerFalse}
      />
    );
  }
}

const mapStateToProps = state => ({
  question: currentQuestionSelector(state),
  questionCount: allQuestionsSelector(state).length,
  areAllAnswered: remainingQuestionsSelector(state).length === 0,
  currentQuestionIndex: currentQuestionIndexSelector(state),
  loading: !currentQuestionSelector(state),
});

const mapDispatchToProps = {
  fetchQuestions,
  answerTrue,
  answerFalse,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

const withData = enhance(Container);

export { withData as Container };
