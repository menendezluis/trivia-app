import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  display: flex;
  
  justify-content: left;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.span`
  font-size: 1.2em;
  text-align: center;
  color: #000000;
  font-weight: 70%;
  border-radius: 5px;
  margin-left:10px;
`;

export const Title = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};
