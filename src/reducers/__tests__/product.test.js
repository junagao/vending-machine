import productReducer from 'reducers/product';
import {
  GET_PRODUCTS,
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
  SET_IS_PRODUCT_COLLECTED,
  REFILL_PRODUCT_STOCK_QUANTITY,
} from 'actions/types';

describe('product reducer', () => {
  let initialState;

  const idMock = 'product-133d';
  const nameMock = 'coke';
  const imgMock = 'images/coke.png';
  const quantityMock = 4;
  const productsListMock = [
    {
      id: 'coke',
      name: 'coke',
      img: 'images/coke.png',
      price: 1,
      currentStock: 10,
    },
    {
      id: 'sprite',
      name: 'sprite',
      img: 'images/sprite.png',
      price: 1.25,
      currentStock: 5,
    },
    {
      id: 'fanta',
      name: 'fanta',
      img: 'images/fanta.png',
      price: 1.25,
      currentStock: 11,
    },
  ];

  beforeEach(() => {
    initialState = {
      products: [],
      selectedProductName: '',
      selectedProductImg: '',
      isCollected: false,
      collectedProducts: [],
    };
  });

  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_PRODUCTS', () => {
    const action = {
      type: GET_PRODUCTS,
      productsList: productsListMock,
    };

    const expectedState = {
      products: productsListMock,
      selectedProductName: '',
      selectedProductImg: '',
      isCollected: false,
      collectedProducts: [],
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SELECT_PRODUCT', () => {
    const action = {
      type: SELECT_PRODUCT,
      name: nameMock,
      img: imgMock,
    };

    const expectedState = {
      products: [],
      selectedProductName: nameMock,
      selectedProductImg: imgMock,
      isCollected: false,
      collectedProducts: [],
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_PRODUCT_STOCK', () => {
    const action = {
      type: UPDATE_PRODUCT_STOCK,
      id: idMock,
      quantity: quantityMock,
    };

    const expectedState = {
      products: [],
      selectedProductName: '',
      selectedProductImg: '',
      isCollected: false,
      collectedProducts: [],
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle COLLECT_PRODUCT', () => {
    const action = {
      type: COLLECT_PRODUCT,
      id: idMock,
    };

    const expectedState = {
      products: [],
      selectedProductName: '',
      selectedProductImg: '',
      isCollected: true,
      collectedProducts: [idMock],
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_IS_PRODUCT_COLLECTED', () => {
    const action = {
      type: SET_IS_PRODUCT_COLLECTED,
      bool: false,
    };

    const expectedState = {
      products: [],
      selectedProductName: '',
      selectedProductImg: '',
      isCollected: false,
      collectedProducts: [],
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle REFILL_PRODUCT_STOCK_QUANTITY', () => {
    const action = {
      type: REFILL_PRODUCT_STOCK_QUANTITY,
      id: idMock,
      quantity: quantityMock,
    };

    const expectedState = {
      products: [],
      selectedProductName: '',
      selectedProductImg: '',
      isCollected: false,
      collectedProducts: [],
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });
});
