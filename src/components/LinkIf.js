import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LinkIf = ({ condition, ...other }) => {
  return condition ? <Link {...other} /> : <div {...other} />;
};

LinkIf.propTypes = {
  condition: PropTypes.bool.isRequired,
};
