import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DisplayAmount = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 1rem;
  width: 6.25rem;
  border-radius: 0.25rem;
  color: #eee;
  text-align: right;
`;

const DisplayDepositedAmount = ({ machineCoinsAmount }) => (
  <DisplayAmount>{machineCoinsAmount} €</DisplayAmount>
);

DisplayDepositedAmount.propTypes = {
  machineCoinsAmount: PropTypes.number.isRequired,
};

export default DisplayDepositedAmount;
