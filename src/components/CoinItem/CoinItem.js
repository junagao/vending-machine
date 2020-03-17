import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinItemLi = styled.li`
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

const CoinItem = ({
  id,
  value,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <CoinItemLi
    key={id}
    id={id}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    onDragOver={onDragOver}
    isDragging={isDragging}
  >
    {value}
  </CoinItemLi>
);

CoinItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default CoinItem;
