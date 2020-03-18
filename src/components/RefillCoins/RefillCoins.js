import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card, CardTitle, Button } from 'components';

const RefillCoinsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RefillCoinsItem = styled.li`
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
`;

const RefillCoins = ({ coins, onRefillCoinsQuantity }) => (
  <Card>
    <CardTitle>Refill machine coins for change (add 5 more)</CardTitle>
    <RefillCoinsList>
      {coins.map(({ id, name }) => (
        <RefillCoinsItem key={id}>
          <Button
            text={name}
            handleClick={() => onRefillCoinsQuantity(id, 5)}
          />
        </RefillCoinsItem>
      ))}
    </RefillCoinsList>
  </Card>
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
