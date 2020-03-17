import {
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
  SET_IS_PRODUCT_COLLECTED,
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

export const setIsProductCollected = (bool) => ({
  type: SET_IS_PRODUCT_COLLECTED,
  bool,
});
