import { SELECT_PRODUCT, UPDATE_PRODUCT_STOCK } from 'actions/types';

export const selectProduct = (name, img) => ({
  type: SELECT_PRODUCT,
  name,
  img,
});

export const updateProductStock = (id, qtd) => ({
  type: UPDATE_PRODUCT_STOCK,
  id,
  qtd,
});
