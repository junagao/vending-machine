import * as actions from 'actions/product';
import {
  GET_PRODUCTS,
  SELECT_PRODUCT,
  UPDATE_PRODUCT_STOCK,
  COLLECT_PRODUCT,
  SET_IS_PRODUCT_COLLECTED,
  REFILL_PRODUCT_STOCK_QUANTITY,
} from 'actions/types';

describe('product actions', () => {
  const nameMock = 'coca zero';
  const imgMock = 'src/images/coca-zero.png';
  const idMock = 'product-2324';
  const quantityMock = 6;
  const boolMock = false;

  describe('getProducts', () => {
    it('has the correct type', () => {
      const action = actions.getProducts();

      expect(action.type).toEqual(GET_PRODUCTS);
    });

    it('had the correct payload', () => {
      const action = actions.getProducts();

      expect(action.payload).toEqual();
    });
  });

  describe('selectProduct', () => {
    it('has the correct type', () => {
      const action = actions.selectProduct();

      expect(action.type).toEqual(SELECT_PRODUCT);
    });

    it('had the correct payload', () => {
      const action = actions.selectProduct(nameMock, imgMock);

      expect(action.name).toEqual(nameMock);
      expect(action.img).toEqual(imgMock);
    });
  });

  describe('updateProductStock', () => {
    it('has the correct type', () => {
      const action = actions.updateProductStock();

      expect(action.type).toEqual(UPDATE_PRODUCT_STOCK);
    });

    it('had the correct payload', () => {
      const action = actions.updateProductStock(idMock, quantityMock);

      expect(action.id).toEqual(idMock);
      expect(action.quantity).toEqual(quantityMock);
    });
  });

  describe('collectProduct', () => {
    it('has the correct type', () => {
      const action = actions.collectProduct();

      expect(action.type).toEqual(COLLECT_PRODUCT);
    });

    it('had the correct payload', () => {
      const action = actions.collectProduct(idMock);

      expect(action.id).toEqual(idMock);
    });
  });

  describe('setIsProductCollected', () => {
    it('has the correct type', () => {
      const action = actions.setIsProductCollected();

      expect(action.type).toEqual(SET_IS_PRODUCT_COLLECTED);
    });

    it('had the correct payload', () => {
      const action = actions.setIsProductCollected(boolMock);

      expect(action.bool).toEqual(boolMock);
    });
  });

  describe('refillProductStock', () => {
    it('has the correct type', () => {
      const action = actions.refillProductStock();

      expect(action.type).toEqual(REFILL_PRODUCT_STOCK_QUANTITY);
    });

    it('had the correct payload', () => {
      const action = actions.refillProductStock(idMock, quantityMock);

      expect(action.id).toEqual(idMock);
      expect(action.quantity).toEqual(quantityMock);
    });
  });
});
