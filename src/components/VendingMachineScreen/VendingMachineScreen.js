import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VendingMachineScreenContainer = styled.div`
  width: 25rem;
  height: 25rem;
  background-color: #eee;
  border-radius: 0.25rem;
  margin-bottom: 6rem;
  padding: 1rem;
`;

const Display = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

const VendingMachineScreen = ({ insertedCoinsAmount }) => (
  <VendingMachineScreenContainer>
    {insertedCoinsAmount ? (
      <Display>Deposited: {insertedCoinsAmount} €</Display>
    ) : (
      <Display>Insert Coin</Display>
    )}
  </VendingMachineScreenContainer>
);

VendingMachineScreen.propTypes = {
  insertedCoinsAmount: PropTypes.number.isRequired,
};

export default VendingMachineScreen;
