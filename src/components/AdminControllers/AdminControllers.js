import PropTypes from 'prop-types';
import React from 'react';

import { RefillCoins } from 'components';

const AdminControllers = ({ coins, onRefillCoinsQuantity }) => (
  <RefillCoins coins={coins} onRefillCoinsQuantity={onRefillCoinsQuantity} />
);

AdminControllers.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  onRefillCoinsQuantity: PropTypes.func.isRequired,
};

export default AdminControllers;
