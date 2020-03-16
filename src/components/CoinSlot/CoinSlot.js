import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CoinSlotContainer = styled.div`
  width: 0.75rem;
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
  <CoinSlotContainer
    id="coin-slot"
    onDrop={onDrop}
    onDragOver={onDragOver}
    onDragEnter={onDragEnter}
    onDragLeave={onDragLeave}
    isDropZone={isDropZone}
  />
);

CoinSlot.propTypes = {
  isDropZone: PropTypes.bool.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default CoinSlot;
