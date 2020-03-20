/* eslint-disable no-param-reassign */
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

const initialState = {
  coins: [],
  walletAmount: 0,
  machineCoinsAmount: 0,
  insertedCoins: [],
  isDragging: false,
  isDropZone: false,
  coinError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_AND_WALLET_AMOUNT: {
      const calculatedWalletAmount = parseFloat(
        action.coinsList
          .map((coin) => parseFloat(coin.value) * coin.userQuantity)
          .reduce((a, b) => a + b),
      );
      return {
        ...state,
        coins: action.coinsList,
        walletAmount: calculatedWalletAmount,
      };
    }
    case INSERT_COIN: {
      const coinValue = parseFloat(action.value);
      const updatedWalletAmount = parseFloat(
        (state.walletAmount - coinValue).toFixed(2),
      );
      const updatedMachineCoinsAmount = parseFloat(
        (state.machineCoinsAmount + coinValue).toFixed(2),
      );
      const updatedCoins = state.coins.map((coin) =>
        coin.id === action.id && coin.userQuantity > 0
          ? {
              ...coin,
              machineQuantity: coin.machineQuantity + 1,
              userQuantity: coin.userQuantity - 1,
            }
          : coin,
      );
      return {
        ...state,
        walletAmount: updatedWalletAmount,
        machineCoinsAmount: updatedMachineCoinsAmount,
        insertedCoins: [...state.insertedCoins, action.value],
        isDropZone: false,
        coins: updatedCoins,
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
    case UPDATE_INSERTED_COIN_AMOUNT:
      return {
        ...state,
        machineCoinsAmount: action.value,
      };
    case COLLECT_COIN_REFUND:
      return {
        ...state,
        machineCoinsAmount: state.machineCoinsAmount - action.value,
        walletAmount: state.walletAmount + action.value,
      };
    case REFILL_COINS_QUANTITY: {
      const updatedCoins = state.coins.map((coin) =>
        coin.id === action.id
          ? { ...coin, machineQuantity: coin.machineQuantity + action.quantity }
          : coin,
      );
      return {
        ...state,
        coins: updatedCoins,
      };
    }
    default:
      return state;
  }
};
