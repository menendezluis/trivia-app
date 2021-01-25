import React from 'react';
import { Link } from 'react-router-dom';
import { FlowButton, Title } from '../../components';
import { Container, InstructionBox, GameTitle } from './components';

export const Layout = () => {
  return (
    <Container>
      <GameTitle> </GameTitle>
      <InstructionBox>
      <Title>Trivia Game</Title>
      
        <p>Do you want to play a Game?</p>
               <Link to="/quiz">
        <FlowButton>Begin</FlowButton>
      </Link>
      </InstructionBox>
     
    </Container>
  );
};
