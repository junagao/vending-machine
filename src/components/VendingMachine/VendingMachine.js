import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import CoinSlot from 'components/CoinSlot';
import VendingMachineScreen from 'components/VendingMachineScreen';
import CollectProductButton from 'components/CollectProductButton';

const VendingMachineContainer = styled.div`
  width: 30rem;
  height: 42rem;
  background-color: #cf0f1c;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  margin-right: 1rem;
`;

const VendingMachine = ({
  onDrop,
  onDragOver,
  onDragEnter,
  onDragLeave,
  isDropZone,
  insertedCoinsAmount,
}) => (
  <VendingMachineContainer>
    <CoinSlot
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      isDropZone={isDropZone}
    />
    <VendingMachineScreen insertedCoinsAmount={insertedCoinsAmount} />
    <CollectProductButton />
  </VendingMachineContainer>
);

VendingMachine.propTypes = {
  isDropZone: PropTypes.bool.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  insertedCoinsAmount: PropTypes.number.isRequired,
};

export default VendingMachine;
