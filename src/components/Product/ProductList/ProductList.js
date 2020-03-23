import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProductItem } from 'components';

const ProductListUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  min-width: 10.5rem;
  min-height: 28rem;
  margin: 1rem 0rem;
  @media (min-width: 640px) {
    min-width: 10.5rem;
  }
  @media (min-width: 768px) {
    min-width: 19rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    min-width: 28rem;
    min-height: 1rem;
  }
`;

const ProductList = ({ products, onSelectProduct }) => (
  <ProductListUl>
    {products.map(({ id, name, img, price, currentStock }) => (
      <ProductItem
        key={id}
        id={id}
        name={name}
        img={img}
        price={price}
        currentStock={currentStock}
        onSelectProduct={onSelectProduct}
      />
    ))}
  </ProductListUl>
);

ProductList.propTypes = {
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
};

export default ProductList;
