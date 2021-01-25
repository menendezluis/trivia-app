import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ResponseList, Container } from './components';
import { Title, FlowButton, Response } from '../../components';
import './styleResult.css';

const renderAnswers = answers => {
  return answers.map(({ id, answer, correctAnswer, questionText }) => (
    <Response
      key={id}
      isCorrect={answer === correctAnswer}
      question={questionText}
    />
  ));
};

export const Layout = ({ answers, totalAnswersCount, rightAnswersCount }) => {
  return (
    
    <Container>
  
      <div className="imageResult" />
  
      <div>
          <div className="resultTitle">
            <h2><span role="img" aria-label="board">📋</span>FINAL STEP</h2>
            <Title>Quiz Results!</Title>
      </div>
      <div>
      <ResponseList>{renderAnswers(answers)}</ResponseList>
      </div>
      <div className="playAgain">
         <div >
             <p className="p3"><p className="p2">SCORE</p> {rightAnswersCount} points </p>
                </div>
                 <div>
      <Link to="/quiz">
        <FlowButton>Play Again</FlowButton>
      </Link>
      </div>
      </div>
      </div>  
      </Container>
      
       
      
  );
};

Layout.propTypes = {
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
