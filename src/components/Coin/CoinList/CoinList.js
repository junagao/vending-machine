import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CoinItem } from 'components';

const CoinListUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoinList = ({
  coins,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <CoinListUl>
    {coins.map(({ id, name, value, userQuantity }) => (
      <CoinItem
        key={id}
        id={id}
        name={name}
        value={value}
        userQuantity={userQuantity}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        isDragging={isDragging}
      />
    ))}
  </CoinListUl>
);

CoinList.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
      userQuantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default CoinList;
