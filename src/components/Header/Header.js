import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 1rem;
  font-size: ${({ fontSize }) => (fontSize === 'h1' ? `1rem` : `0.85rem`)};
`;

const Header = ({ text, fontSize }) => (
  <HeaderContainer fontSize={fontSize}>
    <h1>{text}</h1>
  </HeaderContainer>
);

Header.propTypes = {
  fontSize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
