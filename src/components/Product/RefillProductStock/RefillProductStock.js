import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Card, CardTitle, Button } from 'components';

const RefillList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RefillItem = styled.li`
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
`;

const RefillProductStock = ({ products, onRefillProductStock }) => (
  <Card>
    <CardTitle>Refill machine products (add 5 more)</CardTitle>
    <RefillList>
      {products.map(({ id, name }) => (
        <RefillItem key={id}>
          <Button text={name} handleClick={() => onRefillProductStock(id, 5)} />
        </RefillItem>
      ))}
    </RefillList>
  </Card>
);

RefillProductStock.propTypes = {
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

export default RefillProductStock;
