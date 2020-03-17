import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ProductItem = styled.li`
  margin-right: 0.25rem;
  margin-bottom: 5rem;
`;

const ProductItemButton = styled.button`
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: #ddd;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const ProductDetail = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.25rem;
`;

const ProductList = ({ products, onSelectProduct }) => (
  <div>
    <ProductListContainer>
      {products.map(({ id, img, name, price }) => (
        <ProductItem key={id}>
          <ProductItemButton
            onClick={() => onSelectProduct(name, img, id)}
            type="button"
          >
            <img width="46" src={img} alt={name} />
            <ProductDetail>{price} €</ProductDetail>
          </ProductItemButton>
        </ProductItem>
      ))}
    </ProductListContainer>
  </div>
);

ProductList.propTypes = {
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

export default ProductList;
