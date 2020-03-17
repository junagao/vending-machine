import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const RefillCoins = ({ coins, onRefillCoinsQuantity }) => (
  <button type="button" onClick={() => onRefillCoinsQuantity}>
    {coins.map((coin) => (
      <li key={coin.id}>{coin.name}</li>
    ))}
  </button>
);

RefillCoins.propTypes = {
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

export default RefillCoins;
