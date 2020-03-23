import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

const CoinItemValue = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  padding: 0.5rem;
  border: 4px solid #666;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #888;
  border-radius: 50%;
  opacity: 0.999;
  text-align: center;
  margin-right: 0.5rem;
  cursor: ${({ isDragging }) => (isDragging ? `grabbing` : 'grab !important')};
  &:active {
    cursor: grabbing;
  }
`;

const CoinItemQuantity = styled.p`
  color: #999;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.5rem;
`;

const CoinItem = ({
  id,
  name,
  value,
  userQuantity,
  onDragStart,
  onDragEnd,
  onDragOver,
  isDragging,
}) => (
  <CoinItemLi>
    <CoinItemValue
      id={id}
      value={value}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      isDragging={isDragging}
    >
      {name}
    </CoinItemValue>
    <CoinItemQuantity>
      {userQuantity === 1 ? `${userQuantity} unit` : `${userQuantity} units`}
    </CoinItemQuantity>
  </CoinItemLi>
);

CoinItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  userQuantity: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default CoinItem;
