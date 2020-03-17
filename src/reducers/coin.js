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
    case GET_COINS:
      return {
        ...state,
        coins: action.coinsList,
      };
    case GET_WALLET_AMOUNT:
      return {
        ...state,
        walletAmount: action.walletAmount,
      };
    case INSERT_COIN: {
      const coinValue = parseFloat(action.value);
      const updatedWalletAmount = parseFloat(
        (state.walletAmount - coinValue).toFixed(2),
      );
      const updatedMachineCoinsAmount = parseFloat(
        (state.machineCoinsAmount + coinValue).toFixed(2),
      );
      return {
        ...state,
        walletAmount: updatedWalletAmount,
        machineCoinsAmount: updatedMachineCoinsAmount,
        insertedCoins: [...state.insertedCoins, action.value],
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
    default:
      return state;
  }
};
