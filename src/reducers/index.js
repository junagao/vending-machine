import {
  INSERT_COIN,
  SET_IS_DRAGGING_COIN,
  SET_IS_COIN_DROPZONE,
  SET_COIN_ERROR,
} from 'actions/types';

const initialState = {
  walletAmount: 3,
  insertedCoinsAmount: 0,
  isDragging: false,
  isDropZone: false,
  coinError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSERT_COIN: {
      const coinValue = parseFloat(action.value);
      return {
        ...state,
        walletAmount: parseFloat((state.walletAmount - coinValue).toFixed(2)),
        insertedCoinsAmount: parseFloat(
          (state.insertedCoinsAmount + coinValue).toFixed(2),
        ),
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
    default:
      return state;
  }
};
