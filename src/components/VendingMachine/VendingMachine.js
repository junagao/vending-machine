import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  CoinSlot,
  DisplayDepositedAmount,
  ProductList,
  CollectRefund,
  CollectProduct,
} from 'components';

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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const VendingMachine = ({
  onDrop,
  onDragOver,
  onDragEnter,
  onDragLeave,
  isDropZone,
  machineCoinsAmount,
  products,
  onSelectProduct,
  onCollectCoinRefund,
  selectedProductName,
  selectedProductImg,
  onCollectProduct,
  isCollected,
}) => (
  <VendingMachineContainer>
    <CoinSlot
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      isDropZone={isDropZone}
    />
    <DisplayDepositedAmount machineCoinsAmount={machineCoinsAmount} />
    <ProductList products={products} onSelectProduct={onSelectProduct} />
    <CollectRefund
      onCollectCoinRefund={onCollectCoinRefund}
      machineCoinsAmount={machineCoinsAmount}
    />
    <CollectProduct
      selectedProductName={selectedProductName}
      selectedProductImg={selectedProductImg}
      onCollectProduct={onCollectProduct}
      isCollected={isCollected}
    />
  </VendingMachineContainer>
);

VendingMachine.propTypes = {
  isDropZone: PropTypes.bool.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  machineCoinsAmount: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      currentStock: PropTypes.number,
    }),
  ).isRequired,
  onSelectProduct: PropTypes.func.isRequired,
  selectedProductName: PropTypes.string.isRequired,
  selectedProductImg: PropTypes.string.isRequired,
  onCollectProduct: PropTypes.func.isRequired,
  isCollected: PropTypes.bool.isRequired,
  onCollectCoinRefund: PropTypes.func.isRequired,
};

export default VendingMachine;
