import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  font-size: 0.75rem;
  cursor: pointer;
  color: #eee;
  background-color: #444;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.75rem;
  width: 4rem;
  &:hover {
    background-color: #000;
  }
  @media (min-width: 640px) {
    width: 6.4rem;
    height: 2.75rem;
    padding: 0rem;
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
