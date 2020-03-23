import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductItemButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: #eee;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 640px) {
    padding: 0rem 1rem;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    padding: 0.5rem 0.75rem;
    flex-direction: column;
  }
`;

const ProductImg = styled.img`
  transform: rotate(270deg);
  margin: -1rem 0.75rem;
  @media (min-width: 640px) {
    transform: rotate(270deg);
    margin: -0.5rem 0.75rem;
  }
  @media (min-width: 1024px) {
    transform: rotate(0deg);
    margin: 0;
  }
`;

const ProductDetails = styled.div`
  margin-left: 1rem;
  width: 5rem;
  @media (min-width: 640px) {
    margin-left: 1rem;
    width: 3rem;
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const ProductPrice = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.25rem;
`;

const ProductQuantity = styled.p`
  color: #999;
`;

const ProductItem = ({
  id,
  name,
  img,
  price,
  currentStock,
  onSelectProduct,
}) => (
  <li>
    <ProductItemButton
      onClick={() => onSelectProduct(name, img, id)}
      type="button"
    >
      <ProductImg width="46" src={img} alt={name} />
      <ProductDetails>
        <ProductPrice>{price} €</ProductPrice>
        <ProductQuantity>
          {currentStock === 1
            ? `${currentStock} unit`
            : `${currentStock} units`}
        </ProductQuantity>
      </ProductDetails>
    </ProductItemButton>
  </li>
);

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currentStock: PropTypes.number.isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductItem;
