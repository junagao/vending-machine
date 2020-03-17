import {
  INSERT_COIN,
  SET_IS_DRAGGING_COIN,
  SET_IS_COIN_DROPZONE,
  SET_COIN_ERROR,
  UPDATE_INSERTED_COIN_AMOUNT,
} from 'actions/types';

const initialState = {
  walletAmount: 20,
  insertedCoinsAmount: 0,
  isDragging: false,
  isDropZone: false,
  coinError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSERT_COIN: {
      const coinValue = parseFloat(action.value);
      const updatedWalletAmount = parseFloat(
        (state.walletAmount - coinValue).toFixed(2),
      );
      const updatedInsertedCoinsAmount = parseFloat(
        (state.insertedCoinsAmount + coinValue).toFixed(2),
      );

      return {
        ...state,
        walletAmount: updatedWalletAmount,
        insertedCoinsAmount: updatedInsertedCoinsAmount,
        isDropZone: false,
      };
    }
    case SET_IS_DRAGGING_COIN:
      return {
        ...state,
        isDragging: !state.isDragging,
      };
    case SET_IS_COIN_DROPZONE:
      return {
        ...state,
        isDropZone: !state.isDropZone,
      };
    case SET_COIN_ERROR:
      return {
        ...state,
        coinError: action.message,
        isDropZone: false,
      };
    case UPDATE_INSERTED_COIN_AMOUNT: {
      return {
        ...state,
        insertedCoinsAmount: action.value,
      };
    }
    default:
      return state;
  }
};
