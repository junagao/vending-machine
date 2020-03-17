import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CoinList } from 'components';

const WalletContainer = styled.div`
  width: 20rem;
  height: min-content;
  background-color: #ddd;
  border-radius: 0.25rem;
  margin-bottom: 10rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const WalletAmount = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Wallet = ({
  walletAmount,
  coins,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <WalletContainer>
    <WalletAmount>My wallet amount: {walletAmount} €</WalletAmount>
    <CoinList
      coins={coins}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      isDragging={isDragging}
    />
  </WalletContainer>
);

Wallet.propTypes = {
  walletAmount: PropTypes.number.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ).isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default Wallet;
