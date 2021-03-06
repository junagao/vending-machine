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
import coinsList from 'data/coins';

export const getCoinsAndWallet = () => ({
  type: GET_COINS_AND_WALLET_AMOUNT,
  coinsList,
});

export const insertCoin = (id, value) => ({
  type: INSERT_COIN,
  id,
  value,
});

export const setIsDraggingCoin = () => ({
  type: SET_IS_DRAGGING_COIN,
});

export const setIsCoinDropZone = () => ({
  type: SET_IS_COIN_DROPZONE,
});

export const setCoinError = (message) => ({
  type: SET_COIN_ERROR,
  message,
});

export const updateInsertedCoinAmount = (value) => ({
  type: UPDATE_INSERTED_COIN_AMOUNT,
  value,
});

export const collectCoinRefund = (value) => ({
  type: COLLECT_COIN_REFUND,
  value,
});

export const refillCoinsQuantity = (id, quantity) => ({
  type: REFILL_COINS_QUANTITY,
  id,
  quantity,
});
