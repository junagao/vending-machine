import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from 'components';

describe('Wallet', () => {
  let wrapper;
  const coinsMock = [
    {
      id: 'coin1',
      name: '2 euros',
      value: 2,
      userQuantity: 10,
      machineQuantity: 2,
    },
    {
      id: 'coin2',
      name: '1 euro',
      value: 1,
      userQuantity: 5,
      machineQuantity: 3,
    },
  ];

  const walletAmountMock = 21;

  beforeEach(() => {
    wrapper = shallow(
      <Wallet
        walletAmount={walletAmountMock}
        coins={coinsMock}
        onDragStart={jest.fn()}
        onDragEnd={jest.fn()}
        onDragOver={jest.fn()}
        isDragging
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one Card element with `title` prop of `My wallet: 2 €`', () => {
    expect(wrapper.find('Card').length).toEqual(1);
    expect(wrapper.find('Card').prop('title')).toEqual(
      `My wallet: ${walletAmountMock} €`,
    );
  });

  it('should render two CoinList element', () => {
    expect(wrapper.find('CoinList').length).toEqual(1);
  });
});
