import {
  GET_PRODUCTS,
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
  SET_IS_PRODUCT_COLLECTED,
  REFILL_PRODUCT_STOCK_QUANTITY,
} from 'actions/types';
import productsList from 'data/products';

export const getProducts = () => ({
  type: GET_PRODUCTS,
  productsList,
});

export const selectProduct = (name, img) => ({
  type: SELECT_PRODUCT,
  name,
  img,
});

export const updateProductStock = (id, quantity) => ({
  type: UPDATE_PRODUCT_STOCK,
  id,
  quantity,
});

export const collectProduct = (product) => ({
  type: COLLECT_PRODUCT,
  product,
});

export const setIsProductCollected = (bool) => ({
  type: SET_IS_PRODUCT_COLLECTED,
  bool,
});

export const refillProductStock = (id, quantity) => ({
  type: REFILL_PRODUCT_STOCK_QUANTITY,
  id,
  quantity,
});
