import * as actions from 'actions/coin';
import {
  GET_COINS_AND_WALLET_AMOUNT,
  INSERT_COIN,
  SET_IS_DRAGGING_COIN,
  SET_IS_COIN_DROPZONE,
  SET_COIN_ERROR,
  UPDATE_INSERTED_COIN_AMOUNT,
  COLLECT_COIN_REFUND,
  REFILL_COINS_QUANTITY,
} from 'actions/types';

describe('coin actions', () => {
  const idMock = 'coin-3';
  const quantityMock = 3;
  const valueMock = 0.75;
  const messageMock = 'Unexpected error occurred';

  describe('getCoins', () => {
    it('has the correct type', () => {
      const action = actions.getCoinsAndWallet();

      expect(action.type).toEqual(GET_COINS_AND_WALLET_AMOUNT);
    });

    it('had the correct payload', () => {
      const action = actions.getCoinsAndWallet();

      expect(action.payload).toEqual();
    });
  });

  describe('insertCoin', () => {
    it('has the correct type', () => {
      const action = actions.insertCoin();

      expect(action.type).toEqual(INSERT_COIN);
    });

    it('had the correct payload', () => {
      const action = actions.insertCoin(idMock, valueMock);

      expect(action.id).toEqual(idMock);
      expect(action.value).toEqual(valueMock);
    });
  });

  describe('setIsDraggingCoin', () => {
    it('has the correct type', () => {
      const action = actions.setIsDraggingCoin();

      expect(action.type).toEqual(SET_IS_DRAGGING_COIN);
    });

    it('had the correct payload', () => {
      const action = actions.setIsDraggingCoin();

      expect(action.payload).toEqual();
    });
  });

  describe('setIsCoinDropZone', () => {
    it('has the correct type', () => {
      const action = actions.setIsCoinDropZone();

      expect(action.type).toEqual(SET_IS_COIN_DROPZONE);
    });

    it('had the correct payload', () => {
      const action = actions.setIsCoinDropZone();

      expect(action.payload).toEqual();
    });
  });

  describe('setCoinError', () => {
    it('has the correct type', () => {
      const action = actions.setCoinError();

      expect(action.type).toEqual(SET_COIN_ERROR);
    });

    it('had the correct payload', () => {
      const action = actions.setCoinError(messageMock);

      expect(action.message).toEqual(messageMock);
    });
  });

  describe('updateInsertedCoinAmount', () => {
    it('has the correct type', () => {
      const action = actions.updateInsertedCoinAmount();

      expect(action.type).toEqual(UPDATE_INSERTED_COIN_AMOUNT);
    });

    it('had the correct payload', () => {
      const action = actions.updateInsertedCoinAmount(valueMock);

      expect(action.value).toEqual(valueMock);
    });
  });

  describe('collectCoinRefund', () => {
    it('has the correct type', () => {
      const action = actions.collectCoinRefund();

      expect(action.type).toEqual(COLLECT_COIN_REFUND);
    });

    it('had the correct payload', () => {
      const action = actions.collectCoinRefund(valueMock);

      expect(action.value).toEqual(valueMock);
    });
  });

  describe('refillCoinsQuantity', () => {
    it('has the correct type', () => {
      const action = actions.refillCoinsQuantity();

      expect(action.type).toEqual(REFILL_COINS_QUANTITY);
    });

    it('had the correct payload', () => {
      const action = actions.refillCoinsQuantity(idMock, quantityMock);

      expect(action.id).toEqual(idMock);
      expect(action.quantity).toEqual(quantityMock);
    });
  });
});
