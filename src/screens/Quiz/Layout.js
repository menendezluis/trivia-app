import React from 'react';
import PropTypes from 'prop-types';
import {GameTitle} from './components/GameTitle';
import {
  Actions,
  Button,
  Container,
  Subtitle,
  QuestionBox
} from './components';
import { Title, LinkIf } from '../../components';

export const Layout = ({
  question: { questionText, category },
  currentQuestionIndex,
  questionCount,
  areAllAnswered,
  answerTrue,
  answerFalse,
}) => {
  return (
    <Container>
      
      <GameTitle> </GameTitle>
      <Container>
      <Subtitle>
        {currentQuestionIndex} of {questionCount}
      </Subtitle>
        <Title>{category}</Title> 
      <QuestionBox dangerouslySetInnerHTML={{ __html: questionText }} >
       </QuestionBox>
      
      <Actions>
        <LinkIf condition={areAllAnswered} to="/results">
          <Button option={true} onClick={answerTrue} />
        </LinkIf>
        <LinkIf condition={areAllAnswered} to="/results">
          <Button option={false} onClick={answerFalse} />
        </LinkIf>
      </Actions>  </Container>
      
    </Container>
  );
};

Layout.propTypes = {
  question: PropTypes.shape({
    questionText: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  questionCount: PropTypes.number.isRequired,
  areAllAnswered: PropTypes.bool.isRequired,
  answerTrue: PropTypes.func.isRequired,
  answerFalse: PropTypes.func.isRequired,
};
