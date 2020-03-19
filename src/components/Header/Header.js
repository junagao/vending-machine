import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 1rem;
  font-size: ${({ fontSize }) => (fontSize === 'h1' ? `1.8rem` : `1.25rem`)};
  font-weight: ${({ fontSize }) => (fontSize === 'h1' ? `700` : `600`)};
`;

const Header = ({ text, fontSize }) => (
  <HeaderContainer fontSize={fontSize}>{text}</HeaderContainer>
);

Header.propTypes = {
  fontSize: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Header.defaultProps = {
  fontSize: '',
};

export default Header;
