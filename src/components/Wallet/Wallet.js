import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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

const CoinList = styled.ul`
  padding-top: 1rem;
`;

const CoinItem = styled.li`
  border: 1px solid black;
  width: 3rem;
  height: 3rem;
  background-color: #bbb;
  border-radius: 50%;
  opacity: 0.999;
  overflow: hidden;
  text-align: center;
  line-height: 3rem;
  display: inline-block;
  margin-right: 0.5rem;
  cursor: ${({ isDragging }) => (isDragging ? `grabbing` : 'grab !important')};
  &:active {
    cursor: grabbing;
  }
`;

const Instruction = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const Wallet = ({
  coins,
  walletAmount,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <WalletContainer>
    <WalletAmount>My wallet amount: {walletAmount} €</WalletAmount>
    <CoinList>
      {coins.map(({ id, value }) => (
        <CoinItem
          key={id}
          id={id}
          draggable
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          isDragging={isDragging}
        >
          {value}
        </CoinItem>
      ))}
    </CoinList>
    <Instruction>Drag coin to coin slot.</Instruction>
  </WalletContainer>
);

Wallet.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ).isRequired,
  isDragging: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  walletAmount: PropTypes.number.isRequired,
};

export default Wallet;
