import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 0.5rem;
  color: ${({ main }) => (main ? `#333` : ``)};
  font-size: ${({ main }) => (main ? `1.7rem` : `1.25rem`)};
  font-weight: ${({ main }) => (main ? `700` : `600`)};
`;

const Header = ({ text, main }) => (
  <HeaderContainer main={main}>{text}</HeaderContainer>
);

Header.propTypes = {
  main: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Header.defaultProps = {
  main: false,
};

export default Header;
