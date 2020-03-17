import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollectProductButtonContainer = styled.div`
  width: 28rem;
  height: 4rem;
  background-color: #333;
  border-radius: 0.25rem;
  align-self: flex-end;
  text-align: center;
`;

const ProductImg = styled.img`
  transform: rotate(270deg);
`;

const CollectProductButton = ({ selectedProductName, selectedProductImg }) => (
  <CollectProductButtonContainer>
    <ProductImg width="35" src={selectedProductImg} alt={selectedProductName} />
  </CollectProductButtonContainer>
);

CollectProductButton.propTypes = {
  selectedProductName: PropTypes.string.isRequired,
  selectedProductImg: PropTypes.string.isRequired,
};

export default CollectProductButton;
