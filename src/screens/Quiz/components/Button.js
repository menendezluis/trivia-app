import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button.attrs({
  children: ({ option }) => String(option),
})`
  padding: 10px 20px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ option }) => (option ? '#3CDD00' : '#EB0700')};
  color: #fff;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    opacity: 0.5;
  }
`;

Button.propTypes = {
  option: PropTypes.bool.isRequired,
};
