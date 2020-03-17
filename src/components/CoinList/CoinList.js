import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CoinItem } from 'components';

const CoinListUl = styled.ul`
  padding-top: 1rem;
`;

const CoinList = ({
  coins,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <CoinListUl>
    {coins.map(({ id, value }) => (
      <CoinItem
        key={id}
        id={id}
        value={value}
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
    }),
  ).isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default CoinList;
