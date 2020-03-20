import {
  GET_PRODUCTS,
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
  SET_IS_PRODUCT_COLLECTED,
  REFILL_PRODUCT_STOCK_QUANTITY,
} from 'actions/types';

const initialState = {
  products: [],
  selectedProductName: '',
  selectedProductImg: '',
  isCollected: false,
  collectedProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.productsList,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProductName: action.name,
        selectedProductImg: action.img,
      };
    case UPDATE_PRODUCT_STOCK: {
      const updatedProducts = state.products.map((product) =>
        product.id === action.id
          ? { ...product, currentStock: product.currentStock - action.quantity }
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
        collectedProducts: [...state.collectedProducts, action.id],
        isCollected: true,
      };
    case SET_IS_PRODUCT_COLLECTED:
      return {
        ...state,
        isCollected: action.bool,
      };
    case REFILL_PRODUCT_STOCK_QUANTITY: {
      const updatedProducts = state.products.map((product) =>
        product.id === action.id
          ? { ...product, currentStock: product.currentStock + action.quantity }
          : product,
      );
      return {
        ...state,
        products: updatedProducts,
      };
    }
    default:
      return state;
  }
};
