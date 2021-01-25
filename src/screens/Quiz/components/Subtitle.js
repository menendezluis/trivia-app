import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  margin-top: 25px;
  height: 70px;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.span`
  padding: 5px 20px;
  background: #e6e3e3;
  font-size: 15px;
  text-align: center;
  color: #636363;
  font-weight: 300;
  border-radius: 30px;
  border: 1px solid #c0c0c0;
  margin-left:10px;
`;

export const Subtitle = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};
