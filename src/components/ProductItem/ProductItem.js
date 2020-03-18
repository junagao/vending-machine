import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductItemLi = styled.li`
  margin-bottom: 5rem;
`;

const ProductItemButton = styled.button`
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: #eee;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
  <ProductItemLi>
    <ProductItemButton
      onClick={() => onSelectProduct(name, img, id)}
      type="button"
    >
      <img width="46" src={img} alt={name} />
      <ProductPrice>{price} €</ProductPrice>
      <ProductQuantity>{currentStock} unid.</ProductQuantity>
    </ProductItemButton>
  </ProductItemLi>
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
