import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin: 1rem 0rem;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Vending Machine</h1>
  </HeaderContainer>
);

export default Header;
