import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  font-size: 0.75rem;
  width: 6.25rem;
  cursor: pointer;
  color: #eee;
  background-color: #444;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.75rem;
  &:hover {
    background-color: #000;
  }
`;

const Button = ({ text, handleClick }) => (
  <ButtonContainer type="button" onClick={handleClick}>
    {text}
  </ButtonContainer>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
