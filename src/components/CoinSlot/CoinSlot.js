import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinSlotContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InsertCoinInstruction = styled.p`
  position: relative;
  color: #eee;
  background-color: #8a0b15;
  border-radius: 0.25rem;
  box-sizing: border-box;
  font-size: 0.9rem;
  margin-right: 0.75rem;
  width: 7.5rem;
  height: 2rem;
  padding: 0.5rem;

  &::before {
    position: absolute;
    content: '';
    width: 0.65rem;
    height: 0.65rem;
    top: 0.65rem;
    right: -0.3rem;
    transform: rotate(45deg);
    background-color: #8a0b15;
  }
`;

const CoinSlotDispenser = styled.div`
  width: 1rem;
  height: 3.5rem;
  border: ${({ isDropZone }) =>
    isDropZone ? `2px dashed #8a0c15` : `2px solid #8a0c15`};
  background-color: ${({ isDropZone }) =>
    isDropZone ? `rgba(0, 0, 0, 0.2)` : `rgba(0, 0, 0, 0.75)`};
  border-radius: 0.25rem;
`;

const CoinSlot = ({
  onDrop,
  onDragOver,
  onDragEnter,
  onDragLeave,
  isDropZone,
}) => (
  <CoinSlotContainer>
    <InsertCoinInstruction>Drag coin here &gt;</InsertCoinInstruction>
    <CoinSlotDispenser
      id="coin-slot"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      isDropZone={isDropZone}
    />
  </CoinSlotContainer>
);

CoinSlot.propTypes = {
  onDrop: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  isDropZone: PropTypes.bool.isRequired,
};

export default CoinSlot;
