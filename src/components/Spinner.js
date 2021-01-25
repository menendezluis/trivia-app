import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import spinnerGif from '../assets/images/spinner3.gif';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Text = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

export const Spinner = ({ children }) => {
  return (
    <Container>
      <img src={spinnerGif} alt="Loading" />
      {children}
    </Container>
  );
};

Spinner.propTypes = {
  children: PropTypes.node,
};

Spinner.defaultProps = {
  children: <Text>Loading...</Text>,
};
