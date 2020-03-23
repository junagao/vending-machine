import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollectProductContainer = styled.div`
  min-width: 10.5rem;
  height: 4rem;
  background-color: #333;
  border-radius: 0.25rem;
  align-self: flex-end;
  text-align: center;
  @media (min-width: 640px) {
    min-width: 19rem;
  }
  @media (min-width: 1024px) {
    min-width: 28rem;
  }
`;

const ProductImg = styled.img`
  transform: rotate(270deg);
  cursor: pointer;
`;

const CollectProduct = ({
  selectedProductName,
  selectedProductImg,
  onCollectProduct,
  isCollected,
}) => (
  <CollectProductContainer>
    {!isCollected ? (
      <ProductImg
        width="35"
        src={selectedProductImg}
        alt={selectedProductName}
        onClick={() => onCollectProduct(selectedProductName)}
      />
    ) : null}
  </CollectProductContainer>
);

CollectProduct.propTypes = {
  selectedProductName: PropTypes.string.isRequired,
  selectedProductImg: PropTypes.string.isRequired,
  onCollectProduct: PropTypes.func.isRequired,
  isCollected: PropTypes.bool.isRequired,
};

export default CollectProduct;
