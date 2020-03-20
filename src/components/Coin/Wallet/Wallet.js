import React from 'react';
import PropTypes from 'prop-types';

import { CoinList, Card } from 'components';

const Wallet = ({
  walletAmount,
  coins,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <Card title={`My wallet amount: ${walletAmount} €`}>
    <CoinList
      coins={coins}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      isDragging={isDragging}
    />
  </Card>
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
