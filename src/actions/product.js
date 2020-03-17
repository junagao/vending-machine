import {
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
} from 'actions/types';

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

export const collectProduct = (product) => ({
  type: COLLECT_PRODUCT,
  product,
});
