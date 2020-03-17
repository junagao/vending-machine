import {
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
} from 'actions/types';
import products from 'data/products';

const initialState = {
  products,
  selectedProductName: '',
  selectedProductImg: '',
  isCollected: false,
  collectedProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        selectedProductName: action.name,
        selectedProductImg: action.img,
      };
    }
    case UPDATE_PRODUCT_STOCK: {
      const updatedProducts = state.products.map((product) =>
        product.id === action.id
          ? { ...product, currentStock: product.currentStock - action.qtd }
          : product,
      );
      return {
        ...state,
        products: updatedProducts,
      };
    }
    case COLLECT_PRODUCT:
      return {
        ...state,
        isCollected: true,
        collectedProducts: [...state.collectedProducts, action.product],
      };
    default:
      return state;
  }
};
