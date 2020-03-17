import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProductItem } from 'components';

const ProductListUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 28rem;
`;

const ProductList = ({ products, onSelectProduct }) => (
  <ProductListUl>
    {products.map(({ id, name, img, price }) => (
      <ProductItem
        key={id}
        id={id}
        name={name}
        img={img}
        price={price}
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
      stockCapacity: PropTypes.number,
    }),
  ).isRequired,
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductList;
