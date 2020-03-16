import {
  INSERT_COIN,
  SET_IS_DRAGGING_COIN,
  SET_IS_COIN_DROPZONE,
  SET_COIN_ERROR,
} from 'actions/types';

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
