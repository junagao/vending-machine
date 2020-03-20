import coinReducer from 'reducers/coin';
import {
  GET_COINS_AND_WALLET_AMOUNT,
  INSERT_COIN,
  SET_IS_DRAGGING_COIN,
  SET_IS_COIN_DROPZONE,
  SET_COIN_ERROR,
  UPDATE_INSERTED_COIN_AMOUNT,
} from 'actions/types';

describe('coin reducer', () => {
  let initialState;

  const idMock = 'coin3';
  const valueMock = 0.5;

  const coinsMock = [
    {
      id: 'coin1',
      name: '2 euros',
      value: 2,
      userQuantity: 10,
      machineQuantity: 12,
    },
    {
      id: 'coin2',
      name: '1 euro',
      value: 1,
      userQuantity: 5,
      machineQuantity: 15,
    },
    {
      id: 'coin3',
      name: '50 cents',
      value: 0.5,
      userQuantity: 4,
      machineQuantity: 10,
    },
  ];

  beforeEach(() => {
    initialState = {
      coins: [],
      walletAmount: 0,
      machineCoinsAmount: 0,
      insertedCoins: [],
      isDragging: false,
      isDropZone: false,
      coinError: '',
    };
  });

  it('should return the initial state', () => {
    expect(coinReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_COINS', () => {
    const action = {
      type: GET_COINS_AND_WALLET_AMOUNT,
      coinsList: coinsMock,
    };

    const walletAmountMock = parseFloat(
      coinsMock
        .map((coin) => parseFloat(coin.value) * coin.userQuantity)
        .reduce((a, b) => a + b),
    );

    const expectedState = {
      coins: coinsMock,
      walletAmount: walletAmountMock,
      machineCoinsAmount: 0,
      insertedCoins: [],
      isDragging: false,
      isDropZone: false,
      coinError: '',
    };

    expect(coinReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle INSERT_COIN', () => {
    const action = {
      type: INSERT_COIN,
      id: idMock,
      value: valueMock,
    };

    const coinValueMock = parseFloat(valueMock);
    const updatedWalletAmountMock = parseFloat(
      (initialState.walletAmount - coinValueMock).toFixed(2),
    );
    const updatedMachineCoinsAmountMock = parseFloat(
      (initialState.machineCoinsAmount + coinValueMock).toFixed(2),
    );
    const updatedCoinsMock = initialState.coins.map((coin) =>
      coin.id === idMock && coin.userQuantity > 0
        ? {
            ...coin,
            machineQuantity: coin.machineQuantity + 1,
            userQuantity: coin.userQuantity - 1,
          }
        : coin,
    );

    const updatedInsertedCoinMock = initialState.coins.find(
      (coin) => coin.id === idMock,
    );

    const expectedState = {
      coins: updatedCoinsMock,
      walletAmount: updatedWalletAmountMock,
      machineCoinsAmount: updatedMachineCoinsAmountMock,
      insertedCoins: [updatedInsertedCoinMock],
      isDragging: false,
      isDropZone: false,
      coinError: '',
    };

    expect(coinReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_IS_DRAGGING_COIN', () => {
    const action = {
      type: SET_IS_DRAGGING_COIN,
    };

    const expectedState = {
      coins: [],
      walletAmount: 0,
      machineCoinsAmount: 0,
      insertedCoins: [],
      isDragging: true,
      isDropZone: false,
      coinError: '',
    };

    expect(coinReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_IS_COIN_DROPZONE', () => {
    const action = {
      type: SET_IS_COIN_DROPZONE,
    };

    const expectedState = {
      coins: [],
      walletAmount: 0,
      machineCoinsAmount: 0,
      insertedCoins: [],
      isDragging: false,
      isDropZone: true,
      coinError: '',
    };

    expect(coinReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_COIN_ERROR', () => {
    const action = {
      type: SET_COIN_ERROR,
      message: 'Unexpected error.',
    };

    const expectedState = {
      coins: [],
      walletAmount: 0,
      machineCoinsAmount: 0,
      insertedCoins: [],
      isDragging: false,
      isDropZone: false,
      coinError: 'Unexpected error.',
    };

    expect(coinReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_INSERTED_COIN_AMOUNT', () => {
    const action = {
      type: UPDATE_INSERTED_COIN_AMOUNT,
      value: valueMock,
    };

    const expectedState = {
      coins: [],
      walletAmount: 0,
      machineCoinsAmount: 0.5,
      insertedCoins: [],
      isDragging: false,
      isDropZone: false,
      coinError: '',
    };

    expect(coinReducer(initialState, action)).toEqual(expectedState);
  });
});
