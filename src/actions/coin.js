import {
  GET_COINS,
  GET_WALLET_AMOUNT,
  INSERT_COIN,
  SET_IS_DRAGGING_COIN,
  SET_IS_COIN_DROPZONE,
  SET_COIN_ERROR,
  UPDATE_INSERTED_COIN_AMOUNT,
  COLLECT_COIN_REFUND,
} from 'actions/types';
import coinsList from 'data/coins';
import walletAmount from 'data/wallet';

export const getCoins = () => ({
  type: GET_COINS,
  coinsList,
});

export const getWalletAmount = () => ({
  type: GET_WALLET_AMOUNT,
  walletAmount,
});

export const insertCoin = (value) => ({
  type: INSERT_COIN,
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
