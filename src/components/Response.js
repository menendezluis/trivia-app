import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultDecoration = {
  false: '❌',
  true: '✔️',
};

const Container = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ResponseText = styled.p`
  text-align: left;
  width: 500px;
  margin: 0;
`;

const Decoration = styled.span`
  align-self: flex-start;
  font-size: 25px;
  width: 30px;
  margin-right: 20px;
  font-weight: 800;
`;

// dangerouslySetInnerHTML must be used because the question text from the api
// may come with escaped characters.
export const Response = ({ isCorrect, question, decoration }) => {
  return (
    <Container>
      <Decoration>{decoration[isCorrect]}</Decoration>
      <ResponseText dangerouslySetInnerHTML={{ __html: question }} />
    </Container>
  );
};

Response.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  decoration: PropTypes.shape({
    true: PropTypes.string.isRequired,
    false: PropTypes.string.isRequired,
  }),
};

Response.defaultProps = {
  decoration: defaultDecoration,
};
