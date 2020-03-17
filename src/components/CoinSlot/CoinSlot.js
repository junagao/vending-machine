import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InsertCoinInstruction = styled.p`
  color: #8a0b15;
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
  <>
    <InsertCoinInstruction>Insert coin here:</InsertCoinInstruction>
    <CoinSlotDispenser
      id="coin-slot"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      isDropZone={isDropZone}
    />
  </>
);

CoinSlot.propTypes = {
  isDropZone: PropTypes.bool.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default CoinSlot;
