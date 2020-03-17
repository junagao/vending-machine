import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProductList } from 'components';

const VendingMachineScreenContainer = styled.div`
  width: 25rem;
  height: 20rem;
  background-color: #eee;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Display = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 4rem;
`;

const VendingMachineScreen = ({
  machineCoinsAmount,
  products,
  onSelectProduct,
}) => (
  <VendingMachineScreenContainer>
    {machineCoinsAmount ? (
      <Display>Deposited: {machineCoinsAmount} €</Display>
    ) : null}
    <ProductList products={products} onSelectProduct={onSelectProduct} />
  </VendingMachineScreenContainer>
);

VendingMachineScreen.propTypes = {
  machineCoinsAmount: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      currentStock: PropTypes.number,
      stockCapacity: PropTypes.number,
    }),
  ).isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default VendingMachineScreen;
