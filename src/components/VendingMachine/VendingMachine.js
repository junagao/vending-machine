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
  max-width: 12.5rem;
  max-height: 54rem;
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
  @media (min-width: 640px) {
    min-width: 21rem;
    min-height: 58rem;
  }
  @media (min-width: 768px) {
    min-height: 56rem;
  }
  @media (min-width: 1024px) {
    max-width: 30rem;
    min-height: 42rem;
  }
  @media (min-width: 1440px) {
    min-height: 48rem;
  }
  @media (min-width: 1920px) {
    min-height: 52rem;
  }
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
  onDrop: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  isDropZone: PropTypes.bool.isRequired,
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
  onCollectCoinRefund: PropTypes.func.isRequired,
  isCollected: PropTypes.bool.isRequired,
};

export default VendingMachine;
