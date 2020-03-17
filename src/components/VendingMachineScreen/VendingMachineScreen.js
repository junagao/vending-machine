import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProductList } from 'components';

const VendingMachineScreenContainer = styled.div`
  width: 25rem;
  height: 20rem;
  background-color: #eee;
  border-radius: 0.25rem;
  margin-bottom: 10rem;
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
  insertedCoinsAmount,
  products,
  onSelectProduct,
}) => (
  <VendingMachineScreenContainer>
    {insertedCoinsAmount ? (
      <Display>Deposited: {insertedCoinsAmount} €</Display>
    ) : null}
    <ProductList products={products} onSelectProduct={onSelectProduct} />
  </VendingMachineScreenContainer>
);

VendingMachineScreen.propTypes = {
  insertedCoinsAmount: PropTypes.number.isRequired,
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
