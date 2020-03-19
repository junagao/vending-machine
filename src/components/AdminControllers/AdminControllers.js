import PropTypes from 'prop-types';
import React from 'react';

import { RefillCoins, RefillProductStock } from 'components';

const AdminControllers = ({
  coins,
  onRefillCoinsQuantity,
  products,
  onRefillProductStock,
}) => (
  <>
    <RefillCoins coins={coins} onRefillCoinsQuantity={onRefillCoinsQuantity} />
    <RefillProductStock
      products={products}
      onRefillProductStock={onRefillProductStock}
    />
  </>
);

AdminControllers.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
      userQuantity: PropTypes.number,
    }),
  ).isRequired,
  onRefillCoinsQuantity: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      currentStock: PropTypes.number,
    }),
  ).isRequired,
  onRefillProductStock: PropTypes.func.isRequired,
};

export default AdminControllers;
